import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPdfComponent } from './get-pdf.component';

describe('GetPdfComponent', () => {
  let component: GetPdfComponent;
  let fixture: ComponentFixture<GetPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
