import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekComponent } from './rek.component';

describe('RekComponent', () => {
  let component: RekComponent;
  let fixture: ComponentFixture<RekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
