import React from 'react';
import Router from 'next/router'
import { Menu, Icon } from 'antd';

class App extends React.Component {
  state = {
    current: '',
  };

  componentDidMount() {
    const current = Router.route.replace('/', '');
    setTimeout(() => {
      this.setState({
        current: current || 'index'
      })
    }, 0)

  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    Router.push(`/${e.key}`)
  };

  render() {
    return (
      <Menu
        className="nav_container"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="index">
          <Icon type="packager" />packager
        </Menu.Item>
        <Menu.Item key="storybook">
          <Icon type="storybook" />storybook
        </Menu.Item>
      </Menu>
    );
  }
}
export default App;
