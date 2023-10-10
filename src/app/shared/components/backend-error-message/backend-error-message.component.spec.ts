import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorMessageComponent } from './backend-error-message.component';

describe('BackendErrorMessageComponent', () => {
  let component: BackendErrorMessageComponent;
  let fixture: ComponentFixture<BackendErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BackendErrorMessageComponent]
    });
    fixture = TestBed.createComponent(BackendErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
