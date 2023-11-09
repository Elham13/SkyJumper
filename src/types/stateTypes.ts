export interface AddOn {
  type: string;
  price: number;
  quantity: number;
}
export interface Activity {
  title: string;
  subTitle?: string[];
  price: number;
  discountText?: string;
  imageTitle?: string;
  dateToAttend: Date;
  timeToAttend: string;
  addOns?: AddOn[];
}

type ConsentForm = {
  certifyIAmParent: boolean;
  certifyIamAdult: boolean;
  myFullName: string;
};

export interface WaverFromValues {
  email: string;
  waverIsFor: 'Me' | 'Me an my kids';
  showMore: boolean;
  receiveOffers: boolean;
  saleId?: string;
  adultFirstName: string;
  adultLastName: string;
  createPassword: string;
  adultGender: any;
  phoneNumber: string;
  city: string;
  country: string;
  age: any;
  consent: ConsentForm;
}

export interface WaverFormChildValues {
  firstName: string;
  lastName: string;
  gender: any;
  dateOfBirth: Date;
}
