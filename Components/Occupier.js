import React from 'react';
import styled from 'styled-components';
import {inject, observer} from "mobx-react";

const Fixed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 80px;
  bottom: 80px;
  z-index: 100;
  width: 200px;
  height: 60px;
  background-color: rgba(1,1,0,0.5)
`;

@inject(({store}) => ({
  occupier: store.occupier,
}))

@observer
class Uploader extends React.Component {
  render() {
    const { occupier } = this.props;
    if (!occupier) return <div />  ;
    return (
      <Fixed>
        <span style={{color: '#fff'}}>{occupier} 正在打包...</span>
      </Fixed>
    );
  }
}

export default Uploader;
