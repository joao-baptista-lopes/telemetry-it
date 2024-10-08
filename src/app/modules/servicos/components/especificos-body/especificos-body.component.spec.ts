import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificosBodyComponent } from './especificos-body.component';

describe('EspecificosBodyComponent', () => {
  let component: EspecificosBodyComponent;
  let fixture: ComponentFixture<EspecificosBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecificosBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificosBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
