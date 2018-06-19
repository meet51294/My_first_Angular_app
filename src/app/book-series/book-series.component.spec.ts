import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeriesComponent } from './book-series.component';

describe('BookSeriesComponent', () => {
  let component: BookSeriesComponent;
  let fixture: ComponentFixture<BookSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
