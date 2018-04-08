import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestBendComponent } from './new-test-bend.component';

describe('NewTestBendComponent', () => {
  let component: NewTestBendComponent;
  let fixture: ComponentFixture<NewTestBendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTestBendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestBendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
