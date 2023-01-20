import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public loading: boolean = true;
  public formSearch: any = FormGroup;
  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      origin: ['', Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      destination: ['', Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      currency: ['USD']
    });
    this.loading = false;
  }
  SearchJourney() {
    if (this.formSearch.controls['origin'].value.length != 3 || this.formSearch.controls['destination'].value.length != 3) {
      Swal.fire('Los campos deben tener 3 letras');
    } else if (this.formSearch.controls['origin'].value == this.formSearch.controls['destination'].value) {
      Swal.fire('El origen y el destino no pueden ser iguales');
    } else {
      var origin = this.formSearch.controls['origin'].value;
      var destination = this.formSearch.controls['destination'].value;
      var currency = this.formSearch.controls['currency'].value;
      localStorage.setItem("currency", currency);
      this.router.navigate(['flight/' + origin + '/' + destination + '/' + currency]);
    }
  }
}