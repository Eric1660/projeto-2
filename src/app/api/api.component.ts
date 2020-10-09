import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  gitEric

  ativar: number;

  constructor(
    private github: ApiService
  ) { }

  ngOnInit() {
    this.ativar = 1
    this.gitEric = this.github. getInformationGitEric();
    
  }


}