import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaBannerComponent } from './acerca-banner.component';

describe('AcercaBannerComponent', () => {
  let component: AcercaBannerComponent;
  let fixture: ComponentFixture<AcercaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
