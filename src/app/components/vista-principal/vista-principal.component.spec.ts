import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPrincipalComponent } from './vista-principal.component';

describe('VistaPrincipalComponent', () => {
  let component: VistaPrincipalComponent;
  let fixture: ComponentFixture<VistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
