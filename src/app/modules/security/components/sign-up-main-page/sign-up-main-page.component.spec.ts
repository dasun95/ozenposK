import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMainPageComponent } from './sign-up-main-page.component';

describe('SignUpMainPageComponent', () => {
  let component: SignUpMainPageComponent;
  let fixture: ComponentFixture<SignUpMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
