# JSON Restyle
This is a simple library to renames JSON data keys.

### Quick links

[Example application](https://tapaswi.github.io)
 |
[StackBlitz example](https://stackblitz.com/github/tapaswi/json-restyle)

### Installing and usage

```bash
npm install json-restyle --save
```

##### Load the module for your app:

```javascript
import { JsonRestyleModule } from 'json-restyle'

@NgModule({
  ...
  imports: [
    ...
    JsonRestyleModule
  ]
})
```

##### Use it in component:

```javascript
import { JsonRestyleService } from 'json-restyle';

public constructor(private jsonService: JsonRestyleService) { }

/* Data to be modified */
let data = {
    "version": "0.0.1",
    "name": "json-restyle",
    "description": "Reforms json object",
    "feature": "json object key renaming"
};

/* "old key name" : "new key name" */
let jsonOptions = {
    'version': 'ver',
    'name': 'projName'
};
let modifiedJsonData = this.jsonService.reform(data, jsonOptions);

```
