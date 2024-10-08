import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosBodyComponent } from './contactos-body.component';

describe('ContactosBodyComponent', () => {
  let component: ContactosBodyComponent;
  let fixture: ComponentFixture<ContactosBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactosBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactosBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
