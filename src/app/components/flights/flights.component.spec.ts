import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
    let component: FlightsComponent;
    let fixture: ComponentFixture<FlightsComponent>;
    let fakeActivatedRoute: ActivatedRoute

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientModule,
            ],
            declarations: [
                FlightsComponent
            ],
            providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],

        }).compileComponents();

        fixture = TestBed.createComponent(FlightsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
