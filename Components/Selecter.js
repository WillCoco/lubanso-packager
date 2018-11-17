import React from 'react';
import { Select } from 'antd';
import { observable } from "mobx";
import { inject, observer } from "mobx-react";

const Option = Select.Option;


@inject(({store}) => ({
  list: store.availableList,
  current: store.targetVersion,
  updateTargetVersion: store.updateTargetVersion
}))

@observer
class DropMenus extends React.Component {
  onClick = (e) => {
    this.props.updateTargetVersion(e)
  };

  render() {
    const { list = ['获取中...'], current, style } = this.props;
    return (
      <div style={style}>
        <Select value={current || list[0]} style={{ width: 120 }} onChange={this.onClick}>
          {
            list.map((d, i) => {
              return <Option key={`selector_${i}`} value={d}>{d}</Option>
            })
          }
        </Select>
      </div>
    );
  }
}
export default DropMenus;
