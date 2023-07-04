import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFilterComponent } from './article-filter.component';

describe('ArticleFilterComponent', () => {
  let component: ArticleFilterComponent;
  let fixture: ComponentFixture<ArticleFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFilterComponent]
    });
    fixture = TestBed.createComponent(ArticleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
