import { makeAutoObservable } from 'mobx';

const AppStore = () =>
  makeAutoObservable({
    currentTime: new Date(),
    setCurrentTime(currentTime: Date) {
      this.currentTime = currentTime;
    },
  });

export default AppStore;
