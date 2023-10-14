import {Activity} from './stateTypes';

export interface PersonAttending {
  ageGroup: string;
  price: number;
  quantity: number;
}

export interface AppInfo {
  location?: {
    latitude: number;
    longitude: number;
    altitude?: number;
  };
  selectedScreen?: 'Trampoline' | 'Go Banana';
  activities: Activity[];
  dateToAttend: Date;
  timeToAttend?: string;
}
