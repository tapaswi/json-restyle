import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonRestyleService } from './json-restyle.service';
@Component({
  selector: 'json-restyle',
  template: `
    <p>
      Raw Data: {{data | json}}
    </p>
    <p>
      Modified Data: {{modifiedData | json}}
    </p>
  `,
  styles: []
})
export class JsonRestyleComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() mapping: any;

  public modifiedData: any;

  constructor(private jsonService: JsonRestyleService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && (changes.data && changes.data.previousValue != changes.data.currentValue)
    || (changes.mapping && changes.mapping.previousValue != changes.mapping.currentValue)) {
      this.modifiedData = this.jsonService.reform(this.data, this.mapping);
    }
  }
}
