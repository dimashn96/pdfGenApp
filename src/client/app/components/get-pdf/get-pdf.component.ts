import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/ResponseModel';
import { HttpService } from '../../services/http.service';
import {User} from '../../models/UserModel';

@Component({
  selector: 'app-get-pdf',
  templateUrl: './get-pdf.component.html',
  styleUrls: ['./get-pdf.component.scss']
})
export class GetPdfComponent {

  user: User = new User();
  message: string;
  done = false;

  constructor(private httpService: HttpService) { }

  submit() {
    this.httpService.getPdf(this.user).subscribe((res: Response) => {
        this.done = true;
        if (typeof res.data === 'string') {
          this.message = res.data;
        }
      },
      error => console.log(error)
    );
  }

}
