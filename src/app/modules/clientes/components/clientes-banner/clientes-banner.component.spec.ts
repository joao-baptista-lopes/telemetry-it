import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBannerComponent } from './clientes-banner.component';

describe('ClientesBannerComponent', () => {
  let component: ClientesBannerComponent;
  let fixture: ComponentFixture<ClientesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
