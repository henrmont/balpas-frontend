import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProfileBoxComponent } from './image-profile-box.component';

describe('ImageProfileBoxComponent', () => {
  let component: ImageProfileBoxComponent;
  let fixture: ComponentFixture<ImageProfileBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProfileBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
