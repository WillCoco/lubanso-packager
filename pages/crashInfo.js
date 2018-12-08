import React from 'react';
import styled from 'styled-components';
import {inject, observer} from "mobx-react/index";
import socket from './socket';

const P = styled.div`
  margin-bottom: 20px;
`;
const T = styled.p`
  font-size: 16px;
  color: rgba(0,0,0,0.85)
`;
const Time = styled.p`
  font-size: 14px;
  color: rgba(0,0,0,0.85)
`;
const HR = styled.hr`
  margin-bottom: 20px;
`;

@inject(({store}) => {
  return ({
    crashInfoList: store.crashInfoList,
    updateCrashInfoList: store.updateCrashInfoList,
  })
})

@observer class CrashList extends React.Component {
  componentDidMount() {
    // 获取crashInfo
    socket.on('getCrashInfo', ({info = ''}) => {
      const arr = info.split('<<<');
      this.props.updateCrashInfoList(arr);
    });

    socket.emit('getCrashInfo');
  }

  render() {
    const { crashInfoList = [] } = this.props;
    return (
      <div style={{padding: 24}}>
        {
          crashInfoList.map((d, i) => {
            const arr = d.split('[ERROR]');
            return [
              <Time style={{marginBottom: 8}} key={`crash_${i}`}>{arr[0]}</Time>,
              <T key={`crash_info_${i}`}>{arr[1]}</T>,
              <P key={`crash_info_${i}`}>{arr[2]}</P>,
              <HR />
            ]
          })
        }
      </div>
    )
  }
}

export default CrashList;