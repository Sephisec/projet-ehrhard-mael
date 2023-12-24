import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueWithSearchBarComponent } from './catalogue-with-search-bar.component';

describe('CatalogueSearchComponent', () => {
  let component: CatalogueWithSearchBarComponent;
  let fixture: ComponentFixture<CatalogueWithSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueWithSearchBarComponent],
    });
    fixture = TestBed.createComponent(CatalogueWithSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
