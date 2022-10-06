import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorparentComponent } from './colorparent.component';

describe('ColorparentComponent', () => {
  let component: ColorparentComponent;
  let fixture: ComponentFixture<ColorparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
