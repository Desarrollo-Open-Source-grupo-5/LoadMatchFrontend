import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Newcomer } from './newcomer';

describe('Newcomer', () => {
  let component: Newcomer;
  let fixture: ComponentFixture<Newcomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newcomer],
    }).compileComponents();

    fixture = TestBed.createComponent(Newcomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
