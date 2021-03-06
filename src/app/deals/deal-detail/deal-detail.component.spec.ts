import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailComponent } from '../deal-detail/deal-detail.component';

describe('DealDetailsComponent', () => {
  let component: DealDetailComponent;
  let fixture: ComponentFixture<DealDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
