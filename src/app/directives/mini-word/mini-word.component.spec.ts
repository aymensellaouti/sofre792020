import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWordComponent } from './mini-word.component';

describe('MiniWordComponent', () => {
  let component: MiniWordComponent;
  let fixture: ComponentFixture<MiniWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
