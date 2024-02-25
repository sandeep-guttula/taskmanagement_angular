import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoBtnComponent } from './add-todo-btn.component';

describe('AddTodoBtnComponent', () => {
  let component: AddTodoBtnComponent;
  let fixture: ComponentFixture<AddTodoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTodoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
