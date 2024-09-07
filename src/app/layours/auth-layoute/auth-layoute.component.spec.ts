import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayouteComponent } from './auth-layoute.component';

describe('AuthLayouteComponent', () => {
  let component: AuthLayouteComponent;
  let fixture: ComponentFixture<AuthLayouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthLayouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
