import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingMainPageComponent } from './account-setting-main-page.component';

describe('AccountSettingMainPageComponent', () => {
  let component: AccountSettingMainPageComponent;
  let fixture: ComponentFixture<AccountSettingMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
