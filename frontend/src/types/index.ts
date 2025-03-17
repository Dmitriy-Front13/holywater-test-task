export interface IConfig {
  _id: string;
  name: string;
  sections: ISection[];
}
export interface ISection {
  _id: string;
  name: string;
  type: string;
  title: string;
  showTitle: boolean;
  items: {
    _id: string;
    title: string;
    description?: string;
    image: string;
  }[];
}