import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranspLayout } from './transp-layout';

describe('TranspLayout', () => {
  let component: TranspLayout;
  let fixture: ComponentFixture<TranspLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranspLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(TranspLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
