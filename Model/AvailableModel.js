import { observable, computed, action } from "mobx";


export default class TodoModel {
  id = Math.random();

  @observable availableList = [];

  @computed
  get availableList() {
    return this.availableList;
  }

  @action
  updateAvailableList(list) {
    this.availableList = list;
  }
}

