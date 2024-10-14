import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBodyComponent } from './clientes-body.component';

describe('ClientesBodyComponent', () => {
  let component: ClientesBodyComponent;
  let fixture: ComponentFixture<ClientesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
