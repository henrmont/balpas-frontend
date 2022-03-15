import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegaplantaoComponent } from './pegaplantao.component';

describe('PegaplantaoComponent', () => {
  let component: PegaplantaoComponent;
  let fixture: ComponentFixture<PegaplantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegaplantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PegaplantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
