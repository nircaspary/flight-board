import { makeAutoObservable } from 'mobx';

const AppStore = () =>
  makeAutoObservable({
    currentTime: new Date(),
    setCurrentTime(currentTime: Date) {
      this.currentTime = currentTime;
    },
    sortBy: 'actualTime',
    setSortBy(sortBy: string) {
      this.sortBy = sortBy;
    },
    selectedGate: '',
    setSelectedGate(gate: string) {
      this.selectedGate = gate;
    },
  });

export default AppStore;
