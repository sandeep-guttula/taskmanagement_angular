import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoBtnComponent } from './edit-todo-btn.component';

describe('EditTodoBtnComponent', () => {
  let component: EditTodoBtnComponent;
  let fixture: ComponentFixture<EditTodoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTodoBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTodoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
