import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { nodeData } from '../../mock-data/test-data';
import { TreeNodeComponent } from './tree-node.component';

describe('TreeNodeComponent', () => {
  let component: TreeNodeComponent;
  let fixture: ComponentFixture<TreeNodeComponent>;
  let treeNode: DebugElement; // Add this line

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeNodeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TreeNodeComponent);
    component = fixture.componentInstance;
    component.expanded = true;
    component.node = nodeData[1];
    treeNode = fixture.debugElement.query(By.css('li.tree-node'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have role="treeitem" for the list item', () => {

    fixture.detectChanges();
    const listItem = fixture.debugElement.queryAll(By.css('li[role="treeitem"]'));
    expect(listItem).toBeTruthy();
    expect(listItem.length).toEqual(2);
  });

  it('ngOnChanges should set node and buttonAriaLabel when node changes', () => {
    const nodeChanges: SimpleChanges = {
      node: new SimpleChange(null, component.node, false),
    };
    component.expanded = false;
    component.ngOnChanges(nodeChanges);
    expect(component.node.name).toBe('New Employee Onboarding');
    expect(component.buttonAriaLabel).toBe('New Employee Onboarding list false');
  });

  it('ngOnChanges should not update node and buttonAriaLabel if node is not changed', () => {
    // Create a SimpleChanges object with the correct structure
    const nodeChanges: SimpleChanges = {
      node: new SimpleChange(component.node, component.node, false),
    };


    component.ngOnChanges(nodeChanges);

    expect(component.node.name).toBe('New Employee Onboarding');
    expect(component.buttonAriaLabel).toBe('New Employee Onboarding list true');
  });

  it('ngAfterViewInit should process ARIA attributes when node has children', () => {
    spyOn(component, 'processAriaSelected');
    spyOn(component, 'processAriaExpanded');

    component.ngAfterViewInit();

    expect(component.processAriaSelected).toHaveBeenCalledWith('true');
    expect(component.processAriaExpanded).toHaveBeenCalledWith('true');
  });

  it('flipExpansion should toggle expanded and update ARIA attributes', () => {


    spyOn(component, 'processAriaSelected');
    spyOn(component, 'processAriaExpanded');

    component.flipExpansion();

    expect(component.expanded).toBe(false);
    expect(component.processAriaSelected).toHaveBeenCalledWith('false');
    expect(component.processAriaExpanded).toHaveBeenCalledWith('false');
  });

  it('processAriaSelected should set ariaSelected attribute', () => {
    // Modify this line to get the native element of the treeNode DebugElement
    const treeNodeNativeElement: HTMLLIElement = treeNode.nativeElement;

    // Call the method
    component.processAriaSelected('true');
    fixture.detectChanges();
    // Check that the aria-selected attribute is set to 'true'
    expect(treeNodeNativeElement.getAttribute('aria-selected')).toBe('true');
  });

  it('processAriaSelected should set ariaSelected attribute', () => {
    // Modify this line to get the native element of the treeNode DebugElement
    const treeNodeNativeElement: HTMLLIElement = treeNode.nativeElement;

    // Call the method
    component.processAriaSelected('true');
    fixture.detectChanges();
    // Check that the aria-selected attribute is set to 'true'
    expect(treeNodeNativeElement.getAttribute('aria-selected')).toBe('true');
  });

  it('processAriaExpanded should set ariaExpanded attribute', () => {
    // Modify this line to get the native element of the treeNode DebugElement
    const treeNodeNativeElement: HTMLElement = treeNode.nativeElement;

    // Check that the element has the ariaExpanded attribute
    //expect(treeNodeNativeElement.getAttribute('aria-expanded')).toBeNull();

    // Call the method
    component.processAriaExpanded('true');
    fixture.detectChanges();
    // Check that the aria-expanded attribute is set to 'true'
    expect(treeNodeNativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('should call flipExpansion() when the div is clicked', () => {
    // Spy on the flipExpansion method
    spyOn(component, 'flipExpansion');

    // Find the div element in the template
    const divElement = fixture.debugElement.query(By.css('.tree-node div'));

    // Trigger a click event on the div element
    divElement.triggerEventHandler('click', null);

    // Verify that flipExpansion() was called
    expect(component.flipExpansion).toHaveBeenCalled();
  });


  it('should apply the correct CSS classes for a leaf node', () => {
    component.node = nodeData[0];
    fixture.detectChanges();
    // Find the div element in the template
    const divElement = fixture.debugElement.query(By.css('.tree-node div'));
    console.log(divElement.nativeElement.classList);
    // Verify that the expected CSS classes are applied
    expect(divElement.nativeElement.classList.contains('tree-node__leaf')).toBe(true);
  });
});
