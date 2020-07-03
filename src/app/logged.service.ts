import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  isloggedin =false;
  userName= "";

  constructor() { }
}
