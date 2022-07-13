import { makeAutoObservable } from 'mobx';
import { Flight } from '../components/Flights/FlightsList';

interface Cache {
  [key: string]: Flight[];
}

const AppStore = () =>
  makeAutoObservable({
    cache: {} as Cache,

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
