import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUploadedComponent } from './videos-uploaded.component';

describe('VideosUploadedComponent', () => {
  let component: VideosUploadedComponent;
  let fixture: ComponentFixture<VideosUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosUploadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
