export interface Item {
  attributes: ItemAttributes;
  body: string;
}

export interface ItemAttributes {
  name: string;
  path: string;
  tag: string[];
  description: string;
  img: string;
  date: string;
}
