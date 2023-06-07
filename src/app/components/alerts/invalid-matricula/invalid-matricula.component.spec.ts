import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidMatriculaComponent } from './invalid-matricula.component';

describe('InvalidMatriculaComponent', () => {
  let component: InvalidMatriculaComponent;
  let fixture: ComponentFixture<InvalidMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidMatriculaComponent]
    });
    fixture = TestBed.createComponent(InvalidMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
