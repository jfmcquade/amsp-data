import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesUploadedComponent } from './images-uploaded.component';

describe('ImagesUploadedComponent', () => {
  let component: ImagesUploadedComponent;
  let fixture: ComponentFixture<ImagesUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesUploadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
