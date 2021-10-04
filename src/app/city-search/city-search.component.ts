import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-search', /* city-search component.html */
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl()    /* binds to city search.html..that's called binding. */

  constructor() { }

  ngOnInit(): void {
  }

}
