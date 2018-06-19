import { Component, OnInit } from '@angular/core';
import { BookHttpService} from "../book-http.service";

@Component({
  selector: 'app-book-series',
  templateUrl: './book-series.component.html',
  styleUrls: ['./book-series.component.css']
})
export class BookSeriesComponent implements OnInit {

  constructor (public bookHttpService:BookHttpService) {
    fetch('https://anapioficeandfire.com/api/characters/583')
  .then(response => response.json())
  .then(json => console.log(json))
   }

  ngOnInit() {
    
  }

}
