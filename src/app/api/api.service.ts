import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  getInformationGitEric(){
    return this.http.get('https://api.github.com/users/Eric1660/repos')
  }


  constructor(
    private http: HttpClient
  ) { }

}
