import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAfterLogin } from './home-after-login';

describe('HomeAfterLogin', () => {
  let component: HomeAfterLogin;
  let fixture: ComponentFixture<HomeAfterLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAfterLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAfterLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
