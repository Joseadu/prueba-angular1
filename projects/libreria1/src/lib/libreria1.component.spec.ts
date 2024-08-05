import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libreria1Component } from './libreria1.component';

describe('Libreria1Component', () => {
  let component: Libreria1Component;
  let fixture: ComponentFixture<Libreria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Libreria1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Libreria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
