import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeacherDetailsComponent } from './course-teacher-details.component';

describe('CourseTeacherDetailsComponent', () => {
  let component: CourseTeacherDetailsComponent;
  let fixture: ComponentFixture<CourseTeacherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTeacherDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
