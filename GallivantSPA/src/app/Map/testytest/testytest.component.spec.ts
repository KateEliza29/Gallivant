import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestytestComponent } from './testytest.component';

describe('TestytestComponent', () => {
  let component: TestytestComponent;
  let fixture: ComponentFixture<TestytestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestytestComponent]
    });
    fixture = TestBed.createComponent(TestytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
