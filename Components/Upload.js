import React from 'react';
import { Upload, Icon, message } from 'antd';
import {inject, observer} from "mobx-react";
import {basicUrl} from "../package.json";

const Dragger = Upload.Dragger;

@inject(({store}) => ({
  targetVersion: store.targetVersion,
  availableList: store.availableList,
  updateStep: store.updateStep,
  occupier: store.occupier,
  updateCorePlatform: store.updateCorePlatform,
  corePlatform: store.corePlatform,
}))

@observer
class Uploader extends React.Component {
  render() {
    const { targetVersion, availableList, occupier, style, updateCorePlatform, updateStep, corePlatform } = this.props;
    const props = {
      name: 'file',
      multiple: true,
      action: `${basicUrl}/uploadCore?version=${targetVersion || (availableList.length > 0 && availableList[0])}`,
      beforeUpload: () => {
        if (!!occupier) {
          alert(`${occupier}正在打包，请稍后操作`)
        }
        return !occupier;
      },
      onChange: (info) => {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);

          console.log(info, 'upload11');
          const { response } = info.file;
          updateCorePlatform(response.platform);
          updateStep(2);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      [
        <div key="core_platform_p_1" style={{marginBottom: 10}}>
          <span>当前核心库platform: </span>
          <span style={{fontSize: 18}}>{corePlatform}</span>
        </div>
        ,
        <Dragger key="core_platform_ragger" {...props} style={style}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <Icon type="plus" />
          <p className="ant-upload-text">上传核心库zip</p>
          <p className="ant-upload-hint">os: run core / windows: run_win core_win</p>
        </Dragger>
      ]
    );
  }
}

export default Uploader;
