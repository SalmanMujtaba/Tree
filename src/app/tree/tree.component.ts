import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { IFileStructureData } from './models/file.model';
import { FileDataService } from './services/file-data.service';

@Component({
  selector: 'atl-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  fileData: IFileStructureData[] | undefined;
  @Input() customCss: string;
  expanded = true;
  constructor(public fileDataService: FileDataService, protected http: HttpClient) { }

  ngOnInit(): void {
    this.fileDataService.getFileData()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          console.log("next");
          this.fileData = data;
        },
        error: (e) => {
          console.log("error");
        }
      });
  }
}
