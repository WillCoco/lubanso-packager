import React from 'react';
import { Menu, Icon } from 'antd';

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        className="nav_container"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="packager" />packager
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="storybook" />storybook
        </Menu.Item>
      </Menu>
    );
  }
}
export default App;
