import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleFormComponent } from './sample-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser/src/dom/debug/by';

describe('SampleFormComponent', () => {
  let component: SampleFormComponent;
  let fixture: ComponentFixture<SampleFormComponent>;
  let comp;

  beforeEach(async(() => {
    comp = fixture.componentInstance;
    TestBed.configureTestingModule({
      declarations: [ SampleFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should notify in console on form submission', () => { 
    spyOn(console, 'log');

    comp.SampleFormComponent.controls['sample_form_tree_species'].setValue('Oak'); //text
    comp.SampleFormComponent.controls['sample_form_number_samples'].setValue('3');  //text
    comp.SampleFormComponent.controls['sample_form_location1'].setValue('Wonderboom South');  //text
    comp.SampleFormComponent.controls['sample_form_location2'].setValue('Pretoria');  //text
    comp.SampleFormComponent.controls['sample_form_compartment'].setValue('2');  //text
    comp.SampleFormComponent.controls['sample_form_gps'].setValue('Location');  //text
    comp.SampleFormComponent.controls['sample_form_date_collection'].setValue('Wed Mar 25 2015 02:00:00 GMT+0200');  //datetime
    comp.SampleFormComponent.controls['sample_form_date_sent'].setValue('Wed Mar 25 2015 02:00:00 GMT+0200');  //datetime

    comp.SampleFormComponent.controls['conditions_affected'].setValue('25%');  //text
    comp.SampleFormComponent.controls['conditions_problem_noticed'].setValue('12 January 2019');  //text
    comp.SampleFormComponent.controls['conditions_date_planted'].setValue('27 August 2003');  //text
    comp.SampleFormComponent.controls['conditions_weather_disturbances'].setValue('None');  //text
    comp.SampleFormComponent.controls['conditions_weather_prior'].setValue('Hot and dry');  //text
    comp.SampleFormComponent.controls['conditions_others'].setValue('None');  //text
    comp.SampleFormComponent.controls['conditions_additional'].setValue('None');  //text

    comp.SampleFormComponent.controls['landowner'].setValue('Foresters Incorporated');  //text
    comp.SampleFormComponent.controls['landowner_signature'].setValue('Signature');  //text

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();
  });
});
