import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinaComponent } from './propina.component';

describe('PropinaComponent', () => {
  let component: PropinaComponent;
  let fixture: ComponentFixture<PropinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
