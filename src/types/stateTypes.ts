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
