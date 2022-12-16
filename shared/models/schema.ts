export interface searchBarScehma {
  placeholder: string;
  addToList(event: any, addToListData?: any): any;
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

export interface suggestionListScehma {
  cource_code: string;
  cource_name: string;
  cource_credit: number;
}

export interface listViewSchema {
  cources: Array<listSchema>;
}
