import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInscricaoComponent } from './admin-inscricao.component';

describe('AdminInscricaoComponent', () => {
  let component: AdminInscricaoComponent;
  let fixture: ComponentFixture<AdminInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInscricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
