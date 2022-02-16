import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttachComponent } from './list-attach.component';

describe('ListAttachComponent', () => {
  let component: ListAttachComponent;
  let fixture: ComponentFixture<ListAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
