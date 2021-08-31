import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFinderComponent } from './deal-finder.component';

describe('DealFinderComponent', () => {
  let component: DealFinderComponent;
  let fixture: ComponentFixture<DealFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
