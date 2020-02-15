import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL='https://drone-268306.appspot.com';

  constructor(private http: HttpClient) { }

  getMissions(){
    console.log(this.http.get(this.baseURL + '/mission'));
    return this.http.get(this.baseURL + '/mission');
    //return 'working get';
  }

  postMission(data){
    return this.http.post(this.baseURL+'/mission',data);
  }
}
