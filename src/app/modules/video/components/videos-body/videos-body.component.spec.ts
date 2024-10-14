import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBodyComponent } from './videos-body.component';

describe('VideosBodyComponent', () => {
  let component: VideosBodyComponent;
  let fixture: ComponentFixture<VideosBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
