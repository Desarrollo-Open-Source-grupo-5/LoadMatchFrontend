import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranspRegister } from './transp-register';

describe('TranspRegister', () => {
  let component: TranspRegister;
  let fixture: ComponentFixture<TranspRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranspRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(TranspRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
