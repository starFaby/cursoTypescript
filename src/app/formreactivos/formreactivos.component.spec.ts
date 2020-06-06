import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreactivosComponent } from './formreactivos.component';

describe('FormreactivosComponent', () => {
  let component: FormreactivosComponent;
  let fixture: ComponentFixture<FormreactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormreactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
