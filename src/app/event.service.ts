import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }


  GetPost()
    {
      return this.http.get('https://restcountries.eu/rest/v2/all');
    }
  
}
