import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IFileStructureData } from './models/file.model';
import { FileDataService } from './services/file-data.service';

@Component({
  selector: 'atl-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  fileData: IFileStructureData[];
  @Input() customCss: string;
  expanded = true;
  constructor(protected fileDataService: FileDataService, protected http: HttpClient) { }

  ngOnInit(): void {
    this.fileDataService.getFileData().subscribe((data: IFileStructureData[]) => {
      if (data) { this.fileData = data };
    });
  }

}
