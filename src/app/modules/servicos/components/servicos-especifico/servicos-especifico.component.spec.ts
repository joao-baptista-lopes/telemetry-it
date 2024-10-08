import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosEspecificoComponent } from './servicos-especifico.component';

describe('ServicosEspecificoComponent', () => {
  let component: ServicosEspecificoComponent;
  let fixture: ComponentFixture<ServicosEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosEspecificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
