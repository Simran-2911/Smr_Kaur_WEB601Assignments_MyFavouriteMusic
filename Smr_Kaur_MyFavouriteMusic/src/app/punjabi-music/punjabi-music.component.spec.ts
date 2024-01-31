import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabiMusicComponent } from './punjabi-music.component';

describe('PunjabiMusicComponent', () => {
  let component: PunjabiMusicComponent;
  let fixture: ComponentFixture<PunjabiMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunjabiMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PunjabiMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
