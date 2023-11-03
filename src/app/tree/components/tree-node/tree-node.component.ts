import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IFileStructureData } from '../../models/file.model';

@Component({
  selector: 'atl-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, OnChanges {
  @Input() node: IFileStructureData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.node);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['node'] && changes['node'].currentValue) {
      console.log(changes);
      this.node = changes['node'].currentValue;
    }
  }

}