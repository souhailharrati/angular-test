import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorterLinkComponent } from './shorter-link.component';

describe('ShorterLinkComponent', () => {
  let component: ShorterLinkComponent;
  let fixture: ComponentFixture<ShorterLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorterLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
