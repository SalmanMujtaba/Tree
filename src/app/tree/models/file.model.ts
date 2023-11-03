export interface IFileStructureData {
  id: string;
  name: string;
  children?: IChildren[]
}

export interface IChildren {
  id: string;
  name: string;
}

