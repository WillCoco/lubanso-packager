import React from 'react';
import socketIo from 'socket.io-client';
import { Button } from 'antd';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";
import Selecter from '../Components/Selecter';
import Uploader from '../Components/Upload';
import History from '../Components/History';
import Steper from '../Components/Steper';
import MSGScreen from '../Components/MSGScreen';
import Occupier from '../Components/Occupier';

const socket = socketIo('http://10.10.0.84:3001');

const Row = styled.div`
  display: flex;
`;

const PackContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 100px;
`;


@inject(({store}) => {
  return ({
    basicUrl: store.basicUrl,
    updateAvailableList: store.updateAvailableList,
    updateUrls: store.updateUrls,
    step: store.step,
    updateStep: store.updateStep,
    targetVersion: store.targetVersion,
    availableList: store.availableList,
    targetUrl: store.targetUrl,
    updateTargetUrl: store.updateTargetUrl,
    updateStepStatus: store.updateStepStatus,
    addPackMsg: store.addPackMsg,
    occupier: store.occupier,
    updateOccupier: store.updateOccupier,
  })
})

@observer class Packager extends React.Component {
  state = {
    btnPackDisabled: true,
    btnDownDisabled: true,
  };

  componentDidMount() {
    const { basicUrl, updateStep, updateTargetUrl, updateUrls, updateStepStatus } = this.props;

    // 开始打包
    socket.on('pack', (res) => {
      console.log('pack', res);
      if (!res.url) {
        updateStepStatus('error');
        return;
      }
      updateStep(4);
      updateTargetUrl(res.url);
      updateUrls(res.list);
      updateStepStatus('finish')
    });

    // 打包日志
    socket.on('packMsg', (data) => {
      console.log(data.msg, 'packMsg');
      this.props.addPackMsg(data.msg);
    });

    // 打包占用
    socket.on('packingUser', (data) => {
      console.log(data.user, 'packingUser');
      this.props.updateOccupier(data.user);
    });

    // 中止打包
    socket.on('stopPack', (data) => {
      if (data.succeed) {
        updateStep(2);
      }
    });

    // 获取可打包项
    fetch(`${basicUrl}/getAvailable`)
      .then(res => res.json())
      .then(res => {
        this.props.updateAvailableList(res)
      });

    // 获取可下载项目
    fetch(`${basicUrl}/getUrls`)
      .then(res => res.json())
      .then(res => {
        this.props.updateUrls(res)
      });
  }

  pack = () => {
    const { updateStep, availableList, targetVersion, updateStepStatus } = this.props;
    updateStep(3);
    updateStepStatus('process');
    socket.emit('pack', {version: targetVersion || availableList[0]});
  };

  stopPack = () => {
    // socket.emit('stopPack');
    alert('bash 打包命令中止不了，帮我修复一哈，https://github.com/WillCoco/lubanso-packager')
  };

  render() {
    const { step, occupier } = this.props;
    return (
      <div style={{padding: 100}}>
        <Occupier />
        <Row>
          <Steper />
          <PackContent>
            <Selecter style={{height: 100}} />
            <Uploader style={{height: 200}} />
            <div className="centerRow" style={{height: 100}}>
              <Button disabled={(step === 3 || !!occupier)} type="primary" size="large" onClick={this.pack} style={{marginRight: 30}}>
                开始
              </Button>
              <Button disabled={(step !== 3)} type="primary" size="large" onClick={this.stopPack}>停止</Button>
            </div>
            <MSGScreen style={{height: 200}} />
            <div className="centerRow">
              <a href={this.props.targetUrl}>
                <Button disabled={(step < 4)} type="primary" icon="download" size="large">
                  下载
                </Button>
              </a>
            </div>
          </PackContent>
        </Row>
        <History style={{marginTop: 40}} />
      </div>
    )
  }
}

export default Packager;
