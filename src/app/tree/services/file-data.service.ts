import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFileStructureData } from "../models/file.model";
@Injectable({
  providedIn: 'root'
})
export class FileDataService {

  constructor(protected http: HttpClient
  ) { }

  getFileData(): Observable<IFileStructureData[]> {
    return this.http.get<IFileStructureData[]>('../../../assets/data/data.json');
  }
}
