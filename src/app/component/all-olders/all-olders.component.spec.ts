import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOldersComponent } from './all-olders.component';

describe('AllOldersComponent', () => {
  let component: AllOldersComponent;
  let fixture: ComponentFixture<AllOldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
