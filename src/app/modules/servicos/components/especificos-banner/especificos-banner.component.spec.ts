import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificosBannerComponent } from './especificos-banner.component';

describe('EspecificosBannerComponent', () => {
  let component: EspecificosBannerComponent;
  let fixture: ComponentFixture<EspecificosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecificosBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
