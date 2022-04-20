export enum DreamType {
  happy,
  sad,
  exciting,
  scary,
}

export type Dream = {
  id?: number;
  title: string;
  description: string;
  date: string;
  type: DreamType;
}
