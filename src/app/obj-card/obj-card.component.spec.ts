import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjCardComponent } from './obj-card.component';

describe('ObjCardComponent', () => {
  let component: ObjCardComponent;
  let fixture: ComponentFixture<ObjCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
