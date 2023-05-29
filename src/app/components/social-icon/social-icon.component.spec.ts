import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconComponent } from './social-icon.component';

describe('SocialIconComponent', () => {
  let component: SocialIconComponent;
  let fixture: ComponentFixture<SocialIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialIconComponent]
    });
    fixture = TestBed.createComponent(SocialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
