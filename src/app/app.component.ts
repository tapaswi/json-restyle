import { Component } from '@angular/core';
import { AppService } from './app.service';
// import { JsonRestyleService } from 'json-restyle';
import { JsonRestyleService } from '../../lib/json-restyle/src/json-restyle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-restyle';
  public jsonObject: any;
  public jsonObjectModified: any;

  public jsonObjectArray: any;
  public jsonObjectArrayModified: any;

  public jsonOptions = {
    'version': 'ver',
    'name': 'projName'
  };

  public constructor(
    private appService:AppService,
    private jsonService: JsonRestyleService
  ) {
    this.getJsonObject();
    this.getJsonObjectArray();
  }

  private getJsonObject() {
    this.appService.getJsonObjectData().subscribe(
      (data) => {
        this.jsonObject = data;
        this.jsonObjectModified = this.jsonService.reform(data, this.jsonOptions);
      }
    );
  }

  private getJsonObjectArray() {
    this.appService.getJsonObjectArrayData().subscribe(
      (data) => {
        this.jsonObjectArray = data;
        this.jsonObjectArrayModified = this.jsonService.reform(data, this.jsonOptions);
      }
    );
  }
}
