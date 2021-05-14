import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthCoverSignupPassComponent } from './auth-cover-signup-pass.component';

describe('AuthCoverSignupPassComponent', () => {
  let component: AuthCoverSignupPassComponent;
  let fixture: ComponentFixture<AuthCoverSignupPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCoverSignupPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCoverSignupPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
