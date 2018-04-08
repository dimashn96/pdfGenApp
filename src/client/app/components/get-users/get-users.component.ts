import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../../models/UserModel';
import { Response } from '../../models/ResponseModel';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {

  users: [User];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((res: Response) => {
      this.users = res.data;
      this.users.map((user) => user.image = 'data:image/jpeg;base64,' + user.image);
    },
      error => console.log(error)
    );
  }

}
