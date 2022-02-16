import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLayoutComponent } from './api-layout.component';

describe('ApiLayoutComponent', () => {
  let component: ApiLayoutComponent;
  let fixture: ComponentFixture<ApiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
