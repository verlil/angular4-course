import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rescuetime-test',
  templateUrl: './rescuetime-test.component.html',
  styleUrls: ['./rescuetime-test.component.css']
})

export class RescuetimeTestComponent implements OnInit {
  private apiKey = "&key=B63G5PmQXnoeT2D8gOZ0VK1Ga4V8C0Ig8RF2cYFr";
  private query = "http://www.rescuetime.com/anapi/data?perspective=rank&restrict_kind=activity&restrict_begin=2018-02-02&restrict_end=2018-02-02&format=json"

  constructor(private http: HttpClient) { }

  public getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  ngOnInit() {
    this.getData(this.query+this.apiKey).subscribe(value => {
      console.log(value);
    },
      error => {
        console.log('Error!');
      });

  }

  onGetData() {

  }

}
