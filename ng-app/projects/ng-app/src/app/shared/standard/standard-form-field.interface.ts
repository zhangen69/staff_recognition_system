interface IStandardFormField {
  name: string;
  type: string;
  displayName?: string;
  required?: boolean;
  childName?: string;
  ref?: string;
  refName?: string;
  refValue?: string;
  refOptions?: any[];
  default?: any;
  enum?: any;
  fields?: any[];
  add?: any;
}

interface IStandardColumn {
  name: string;
  type?: string;
  displayName?: string;
  format?: string;
  default?: any;
  template?: any;
}

export { IStandardFormField, IStandardColumn };
