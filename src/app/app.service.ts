import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  public getJsonObjectData() {
    return this.http.get('./assets/mock-data-1.json').pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getJsonObjectArrayData() {
    return this.http.get('./assets/mock-data-2.json').pipe(
      map((response) => {
        return response;
      })
    );
  }
}
