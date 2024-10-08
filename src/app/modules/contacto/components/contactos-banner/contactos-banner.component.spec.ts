import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosBannerComponent } from './contactos-banner.component';

describe('ContactosBannerComponent', () => {
  let component: ContactosBannerComponent;
  let fixture: ComponentFixture<ContactosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactosBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
