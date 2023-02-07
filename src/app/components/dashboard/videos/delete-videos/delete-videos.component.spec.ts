import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVideosComponent } from './delete-videos.component';

describe('DeleteVideosComponent', () => {
  let component: DeleteVideosComponent;
  let fixture: ComponentFixture<DeleteVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
