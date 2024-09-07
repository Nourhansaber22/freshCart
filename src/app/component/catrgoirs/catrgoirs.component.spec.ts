import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrgoirsComponent } from './catrgoirs.component';

describe('CatrgoirsComponent', () => {
  let component: CatrgoirsComponent;
  let fixture: ComponentFixture<CatrgoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatrgoirsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatrgoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
