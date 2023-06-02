import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSessioRecusDiazComponent } from './inicia-sessio-recus-diaz.component';

describe('IniciaSessioRecusDiazComponent', () => {
  let component: IniciaSessioRecusDiazComponent;
  let fixture: ComponentFixture<IniciaSessioRecusDiazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaSessioRecusDiazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaSessioRecusDiazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
