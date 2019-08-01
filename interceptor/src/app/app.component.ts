import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptor';

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6').subscribe(() => {
      console.log('success');
    }, (error) => {
      console.log('error', error);
    });
  }
}
