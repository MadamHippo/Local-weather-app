import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search', /* city-search component.html */
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>(); /* This is the text box!*/
  search = new FormControl("", [Validators.minLength(3)])   /* in the search text box, it will be intitalizzed with empty data and then initialized when you have more than 3 characters at a minimum*/

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if(!this.search.invalid) {this.searchEvent.emit(searchValue);} /* Decting any change in the text box and passing the data through, emitting it. Thats it. It just passes data to another thing that wants to read it, in this case the app component. */
    })
  }

}
