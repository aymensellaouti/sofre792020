import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonnesComponent } from './add-personnes.component';

describe('AddPersonnesComponent', () => {
  let component: AddPersonnesComponent;
  let fixture: ComponentFixture<AddPersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
