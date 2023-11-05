import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { nodeData } from './mock-data/test-data';
import { TreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeComponent, TreeNodeComponent],
      imports: [HttpClientTestingModule,]

    })
      .compileComponents();
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the file nodes when fileData is provided', () => {
    component.fileData = nodeData;
    fixture.detectChanges();
    const fileNodes = fixture.debugElement.queryAll(By.css('.tree__list'));
    expect(fileNodes).toBeDefined();
    expect(fileNodes.length).toBeGreaterThan(0);
  });

  it('should not have any tree nodes if there is no node data', () => {
    component.fileData = undefined;
    fixture.detectChanges();
    const fileNodes = fixture.debugElement.queryAll(By.css('.tree__list'));
    expect(fileNodes.length).toEqual(0);
  });

  it('should display the error message when no data is found', () => {
    component.fileData = undefined;
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('#error-message'));
    expect(errorMessage.nativeElement.textContent).toEqual('Sorry, there is no data available.');
  });

  xit('should apply the custom css if the input is provided', () => {
    component.customCss = 'abc xyz';
    component.fileData = nodeData;
    fixture.detectChanges();
    const cssNode = fixture.nativeElement.querySelector('.tree__list');
    console.log(cssNode.classList, "===");
    expect(cssNode.classList.contains('abc xyz')).toBeTrue();
  });
});
