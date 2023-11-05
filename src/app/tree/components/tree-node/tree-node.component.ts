import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import { IFileStructureData } from '../../models/file.model';

@Component({
  selector: 'atl-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnChanges, AfterViewInit {
  @Input() node: IFileStructureData;
  @Input() expanded: boolean;
  buttonAriaLabel: string;
  @ViewChild('treeNode') treeNode: ElementRef<HTMLLIElement>;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['node'] && changes['node'].currentValue) {
        this.node = changes['node'].currentValue;
        this.buttonAriaLabel = this.node.name + ' list ' + this.expanded;
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.node.children) {
      this.processAriaSelected('true');
      this.processAriaExpanded('true');
    }
  }

  flipExpansion() {
    this.expanded = !this.expanded;
    this.processAriaSelected(this.expanded.toString());
    this.processAriaExpanded(this.expanded.toString());
  }

  processAriaSelected(value: string) {
    this.treeNode.nativeElement.ariaSelected = value;
  }

  processAriaExpanded(expanded: string) {
    this.treeNode.nativeElement.ariaExpanded = expanded;
  }
}
