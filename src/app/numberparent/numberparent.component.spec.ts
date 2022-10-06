import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberparentComponent } from './numberparent.component';

describe('NumberparentComponent', () => {
  let component: NumberparentComponent;
  let fixture: ComponentFixture<NumberparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
