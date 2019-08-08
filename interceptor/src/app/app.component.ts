import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptor';

  response: any;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    // this.http.get('https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6').subscribe(() => {
    //   console.log('success');
    // }, (error) => {
    //   console.log('error', error);
    // });
  }

  onCallHttp() {

    const url = 'https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6';

    const url1 = 'http://localhost:5200';

    this.http.get(url1).subscribe(r => {
      this.response = r;
      // console.log(r);
    });
  }

  onCallHttpError() {

    const url = 'http://localhost:5200/api/login';

    this.http.get(url).subscribe(r => {
      this.response = r;
      // console.log(r);
    });
  }
}
