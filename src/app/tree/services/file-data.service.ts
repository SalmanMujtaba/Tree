import { Observable, shareReplay } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFileStructureData } from "../models/file.model";

@Injectable({
  providedIn: 'root'
})
export class FileDataService {
  fileData$: Observable<IFileStructureData[]> | null = null;
  constructor(protected http: HttpClient
  ) { }

  getFileData(): Observable<IFileStructureData[]> {
    if (!this.fileData$) {
      // Create the observable and apply shareReplay(1)
      this.fileData$ = this.http.get<IFileStructureData[]>('../../../assets/data/data.json').pipe(
        shareReplay(1)
      );
    }
    return this.fileData$;
  }

  refreshData() {
    this.fileData$ = null;
  }
}
