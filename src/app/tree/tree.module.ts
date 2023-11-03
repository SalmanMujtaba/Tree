import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';

@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    TreeRoutingModule
  ]
})
export class TreeModule { }
