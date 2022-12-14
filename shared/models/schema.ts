export interface searchBarScehma {
  placeholder: string;
}

export interface heroSectionSchema {
  title: string;
  description: string;
}

export interface listSchema {
  id: string;
  title: string;
  credit: string;
  grade: string;
  onDelete?(event: any): any;
}

export interface listViewSchema {
  cources: Array<listSchema>;
}
