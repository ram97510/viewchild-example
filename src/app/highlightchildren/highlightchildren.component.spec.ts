import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightchildrenComponent } from './highlightchildren.component';

describe('HighlightchildrenComponent', () => {
  let component: HighlightchildrenComponent;
  let fixture: ComponentFixture<HighlightchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightchildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
