import { action, observable, computed } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

class Store {
  id = Math.random();

  basicUrl = 'http://10.10.0.84:3001';

  // 可用版本
  @observable availableList = ['获取中..'];
  @action updateAvailableList(list) {
    store.availableList = list;
  }

  // 目标打包版本
  @observable targetVersion;
  @action updateTargetVersion(v) {
    store.targetVersion = v;
  }

  // 打包日志
  @observable packMsg = [];
  @action addPackMsg(msg) {
    store.packMsg.push(msg);
  }
  @action cleanPackMsg() {
    store.packMsg = [];
  }

  // 打完下载链接
  @observable targetUrl;
  @action updateTargetUrl(v) {
    store.targetUrl = v;
  }

  // 可下载包
  @observable urls = [];
  @action updateUrls(list) {
    store.urls = list;
  }

  // 占用者信息
  @observable occupier = '';
  @action updateOccupier(occupier) {
    store.occupier = occupier;
  }

  // step
  @observable step = 1;
  @action updateStep(v) {
    store.step = v;
  }

  @observable stepStatus = 'finish';
  @action updateStepStatus(v) {
    store.stepStatus = v;
  }
}


let store = null;
export function initializeStore (initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}