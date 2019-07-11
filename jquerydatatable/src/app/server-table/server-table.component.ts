import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {

  dtOptions: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      processing: true,
      //serverSide: true,
      searching: true,
      ordering: true,
      paging: true,
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
          render: function (obj, type, data, meta) {
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
        class: 'none'
      },
      {
          orderable: false,
          width: '70px',
          className: 'ctn-center',
          render: function (obj, type, data, meta) {
              var str = '';
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
  }

}
