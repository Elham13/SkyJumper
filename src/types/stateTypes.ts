import {PersonAttending} from '.';

export interface Activity {
  title: string;
  subTitle?: string[];
  price?: string;
  discountText?: string;
  imageTitle?: string;
  dateToAttend: Date;
  timeToAttend?: string;
  peopleAttending?: PersonAttending[];
}
