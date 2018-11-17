import React from 'react';
import {findDOMNode}  from 'react-dom'
import styled from 'styled-components';
import { inject, observer } from "mobx-react";

const Screen = styled.div`
  height: 300px;
  padding: 10px 16px;
  border-radius: 5px;
  overflow: scroll;
  position: relative;
  background: #fafafa;
`;


const Row = styled.div`
  padding: 10px 0 10px 24px;
`;

@inject(({store}) => ({
  packMsg: store.packMsg,
}))

@observer
class App extends React.Component {
  componentDidUpdate() {
    const s = findDOMNode(this.screen);
    if (s && s.scrollTo) {
      s.scrollTo(0, s.scrollHeight);
      console.log(s.scrollHeight, 'packMsg');
    }
  }

  render() {
    const { packMsg = [], style } = this.props;
    return (
      <Screen ref={(c) => { this.screen = c; }} style={style}>
        <h4>打包日志：</h4>
        {
          packMsg.map((d, i) => {
            return (<Row key={`msg_${i}`}><p>{d}</p></Row>)
          })
        }
      </Screen>
    );
  }
}

export default App;
