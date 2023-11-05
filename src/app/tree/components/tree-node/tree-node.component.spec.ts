import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nodeData } from '../../mock-data/test-data';
import { TreeNodeComponent } from './tree-node.component';

describe('TreeNodeComponent', () => {
  let component: TreeNodeComponent;
  let fixture: ComponentFixture<TreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeNodeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TreeNodeComponent);
    component = fixture.componentInstance;
    component.node = nodeData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
