import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorpRegister } from './corp-register';

describe('CorpRegister', () => {
  let component: CorpRegister;
  let fixture: ComponentFixture<CorpRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(CorpRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
