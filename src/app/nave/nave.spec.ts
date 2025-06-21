import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nave } from './nave';

describe('Nave', () => {
  let component: Nave;
  let fixture: ComponentFixture<Nave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
