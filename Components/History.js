import React from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";


const Row = styled.div`
  padding: 10px 0 10px 24px;
`;

@inject(({store}) => ({
  urls: store.urls,
}))

@observer
class App extends React.Component {
  render() {
    const { urls = [], style } = this.props;
    return (
      <div style={style}>
        <h3>下载历史版本：</h3>
        {
          urls.map((d, i) => {
            return (<Row key={`${d.name}_${i}`}><a href={d.url}>{d.name}</a></Row>)
          })
        }
      </div>
    );
  }
}

export default App;
