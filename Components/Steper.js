import React from 'react';
import styled from 'styled-components';
import { Steps } from 'antd';
import {inject, observer} from 'mobx-react/index';

const StyledSteps = styled(Steps)`
  width: 200px;
`;

const Step = Steps.Step;

@inject(({store}) => ({
  step: store.step,
  stepStatus: store.stepStatus
}))

@observer
class Uploader extends React.Component {
  render() {
    const { step = 1, stepStatus } = this.props;
    return (
      <StyledSteps direction="vertical" current={step} status={stepStatus}>
        <Step style={{height: 100}} title="选择版本" description="默认最新" />
        <Step style={{height: 210}} title="上传核心库" description="win: 包含'core_win，run_win'文件的zip / mac: 包含'core，run'文件的zip" />
        <Step style={{height: 100}} title="Ready" description="可以开始打包" />
        <Step style={{height: 200}} title="打包中" description="" />
        <Step style={{height: 100}} title="完成" description="打包完可下载" />
      </StyledSteps>
    );
  }
}

export default Uploader;

