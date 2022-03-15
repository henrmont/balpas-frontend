import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoBoxComponent } from './inscricao-box.component';

describe('InscricaoBoxComponent', () => {
  let component: InscricaoBoxComponent;
  let fixture: ComponentFixture<InscricaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscricaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
