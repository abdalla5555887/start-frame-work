import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alarmes } from './alarmes';

describe('Alarmes', () => {
  let component: Alarmes;
  let fixture: ComponentFixture<Alarmes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alarmes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alarmes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
