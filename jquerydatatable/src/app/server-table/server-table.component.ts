import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {

  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};

  persons: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ordering: true,
      paging: true,
      select: true,
      // responsive: true, // Make page scroll to top.. don't know why
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;
            console.log(resp.data);
            console.log(dataTablesParameters);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [
        { title: 'id', data: 'id' },
        { title: 'first name', data: 'firstName', orderable: false, searchable: false },
        { title: 'last name', data: 'lastName' }
      ]
    };

    /*
    this.dtOptions = {
      responsive: true,
      //pageLength: 10,
      pagingType: 'full_numbers',
      info: true,
      autoWidth: false,
      ajax: 'https://l-lin.github.io/angular-datatables/data/data.json',
      columns: [
        {
          orderable: false,
          width: '40px',
          className: 'ctn-center',
          render(obj, type, data, meta) {
              return meta.row + meta.settings._iDisplayStart + 1;
          }
      },
      {
        title: 'ID',
        data: 'id',
        width: '100px'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName',
        class: 'none',
        orderable: 'false'
      },
      {
          orderable: false,
          width: '70px',
          className: 'ctn-center',
          render(obj, type, data, meta) {
              const str = '';
              console.log(data.lastName);
             // str = str + '<a href="/money/mnaccount/history/' + data.ID + '" title="Lịch sử giao dịch" class="mg-lr-2"><i class="fa fa-eye" aria-hidden="true"></i></a>';
             // if (allowEdit === "True") {
             //     str = str + '<a href="/money/mnaccount/edit/' + data.ID + '\" title="Cập nhật tài khoản" title="Cập nhật" class="mg-lr-2"><i class="fa fa-edit" aria-hidden="true"></i></a>';
             // }
             // if (allowDelete === "True") {
             //     str = str + '<a href="javascript:;" title="Xóa" onclick="confirmDelete(\'' + data.ID + '\');" class="mg-lr-2"><i class="fa fa-remove" aria-hidden="true"></i></a>';
             //}
              return str;
          }
      }]
    };
    */
  }

}

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
