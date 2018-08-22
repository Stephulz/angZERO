import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIdComponent } from './task-id.component';

describe('TaskIdComponent', () => {
  let component: TaskIdComponent;
  let fixture: ComponentFixture<TaskIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
