import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesIntroComponent } from './clientes-intro.component';

describe('ClientesIntroComponent', () => {
  let component: ClientesIntroComponent;
  let fixture: ComponentFixture<ClientesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
