import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterComponent } from './chapter.component';

describe('ChapterComponent', () => {
  let component: ChapterComponent;
  let fixture: ComponentFixture<ChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterComponent]
    });
    fixture = TestBed.createComponent(ChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
