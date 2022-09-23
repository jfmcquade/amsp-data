import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadXlsxFileComponent } from './read-xlsx-file.component';

describe('ReadXlsxFileComponent', () => {
  let component: ReadXlsxFileComponent;
  let fixture: ComponentFixture<ReadXlsxFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadXlsxFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadXlsxFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
