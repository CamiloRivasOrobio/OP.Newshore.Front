import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [SearchComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        // component.ngOnInit();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('origin field validity', () => {
    //     fixture.detectChanges();
    //     const origin = component.formSearch.controls['origin'];
    //     origin.setValue('MZL');
    //     expect(component.formSearch.invalid).toBeTrue();
    // });
});
