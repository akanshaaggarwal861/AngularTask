import { Component, OnInit, ViewChild } from '@angular/core';
import {LoggedService } from './../logged.service';
import { EventService } from './../event.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table'
import {MatSortModule, MatSort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = "";
  password = "";
  Posts: Object;
  p: number =1;
  searchtext: string;
  
  constructor(private ls: LoggedService, private data: EventService) { }

  ngOnInit(): void {
    
    this.data.GetPost().subscribe(
      data => this.Posts = data
     );
    var loggedin = localStorage.getItem("isLogin");
    if (loggedin !== "true") {
      window.location.replace("/LoginPage");
    } else {
      this.username = localStorage.getItem("User");
      this.password = localStorage.getItem("password");
    }
  }

  logout() {
    localStorage.clear();
    window.location.replace("/LoginPage");
  }

}
