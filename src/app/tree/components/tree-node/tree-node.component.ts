import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IFileStructureData } from '../../models/file.model';

@Component({
  selector: 'atl-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnChanges {
  @Input() node: IFileStructureData;
  @Input() expanded: boolean;
  buttonAriaLabel: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['node'] && changes['node'].currentValue) {
      console.log(changes);
      this.node = changes['node'].currentValue;
      this.buttonAriaLabel = this.node.name + ' list ' + this.expanded;
    }
  }
}
