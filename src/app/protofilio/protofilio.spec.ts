import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protofilio } from './protofilio';

describe('Protofilio', () => {
  let component: Protofilio;
  let fixture: ComponentFixture<Protofilio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protofilio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Protofilio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
