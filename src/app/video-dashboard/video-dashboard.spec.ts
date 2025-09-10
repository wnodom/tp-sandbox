import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDashboard } from './video-dashboard';

describe('VideoDashboard', () => {
  let component: VideoDashboard;
  let fixture: ComponentFixture<VideoDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
