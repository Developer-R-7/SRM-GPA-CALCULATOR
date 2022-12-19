export interface searchBarScehma {
  placeholder: string;
  addToList(event: any, addToListData?: any): any;
  addFormData: { title: string; credit: string; grade: string };
  handleCourceFieldChange(event: any): any;
}

export interface heroSectionSchema {
  title: string;
  description: string;
}

export interface courceListItem {
  item: { title: string; credit: string; grade: string };
  handleCourceFieldChange(event: any): any;
  handleAddCource(event: any): any;
  handleChangeView(event: any, value: boolean): any;
  viewGPA: boolean;
}

export type gradeSchema =
  | "O"
  | "A+"
  | "A"
  | "B+"
  | "C"
  | "P"
  | "F"
  | "Ab"
  | "I";

export interface listSchema {
  id: string;
  title: string;
  credit: string;
  grade: string;
}

export interface cardListSchema extends listSchema {
  onDelete(event: any): any;
}

export interface suggestionListScehma {
  cource_code: string;
  cource_name: string;
  cource_credit: number;
}

export interface listViewSchema {
  cources: Array<listSchema>;
  onDelete(event: any): any;
  viewGPA: boolean;
}

export interface headerCardSchema {
  title: string;
  hide: boolean;
  handleAddCource(event: any): any;
  addFormData: { title: string; credit: string; grade: string };
  handleCourceFieldChange(event: any): any;
  handleChangeView(event: any, value: boolean): any;
}

export type ToastSchema = "success" | "error";

export interface progressBarScehma {
  viewGPA: boolean;
  gpa: number;
}

export interface resultCardScehma {
  viewGPA: boolean;
  handleCourceFieldChange(event: any): any;
  handleAddCource(event: any): any;
  handleChangeView(event: any, value: boolean): any;
  gpa: number;
  addFormData: { title: string; credit: string; grade: string };
}

export interface ProgressProviderSchema {
  valueStart: number;
  valueEnd: number;
  children: any;
}
