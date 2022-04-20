import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteImageProfileBoxComponent } from './delete-image-profile-box.component';

describe('DeleteImageProfileBoxComponent', () => {
  let component: DeleteImageProfileBoxComponent;
  let fixture: ComponentFixture<DeleteImageProfileBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteImageProfileBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteImageProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
