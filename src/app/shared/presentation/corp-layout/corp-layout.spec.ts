import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorpLayout } from './corp-layout';

describe('CorpLayout', () => {
  let component: CorpLayout;
  let fixture: ComponentFixture<CorpLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CorpLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
