import React from 'react';
import { Upload, Icon, message } from 'antd';
import {inject, observer} from "mobx-react";

const Dragger = Upload.Dragger;

@inject(({store}) => ({
  basicUrl: store.basicUrl,
  targetVersion: store.targetVersion,
  availableList: store.availableList,
  updateStep: store.updateStep
}))

@observer
class Uploader extends React.Component {
  render() {
    const { basicUrl, targetVersion, availableList, style } = this.props;
    const props = {
      name: 'file',
      multiple: true,
      action: `${basicUrl}/uploadCore?version=${targetVersion || availableList[0]}`,
      onChange: (info) => {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          this.props.updateStep(2);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <Dragger {...props} style={style}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <Icon type="plus" />
        <p className="ant-upload-text">上传核心库zip</p>
        <p className="ant-upload-hint">os: run core</p>
        <p className="ant-upload-hint">windows: run_win core_win</p>
      </Dragger>
    );
  }
}

export default Uploader;
