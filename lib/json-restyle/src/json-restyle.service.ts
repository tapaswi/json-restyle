import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonRestyleService {
  constructor() { }

/***
 * PURPOSE    : Rename key in json object
 * jsonObject : Single JSON object/Array of JSON objects
 * mappings   : { Old key Name1 : New key Name1, Old key Name2 : New key Name2, ... }
 * TODO       : Nested JSON Object
 */
  public reform(jsonObject, mappings) {
    let data: any;
    if (jsonObject instanceof Array) {
      data = JSON.parse(JSON.stringify({
              array: jsonObject
            })).array;
      for (let i=0; i<data.length; i++) {
        for (var property in mappings) {
          data[i][mappings[property]] = data[i][property];
          delete data[i][property];
        }
      }
      return data;
    } else {
      if (jsonObject instanceof Object) {
        data = JSON.parse(JSON.stringify(jsonObject));
        for (var property in mappings) {
          data[mappings[property]] = data[property];
          delete data[property];
        }
        return data;
      }
    }
    return jsonObject;
  }
}
