import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,

    public router:Router,public appService:AppService,private fb: FormBuilder) {
      this.createForm();

     }
     createForm() {

      this.angForm = this.fb.group({
  
          firstName: ['', Validators.required ],
  
          lastName: ['', Validators.required ],
  
          email: ['', Validators.required ]
         
  
        });
  
      }
  
  public edituser;
  ngOnInit() {
    this.route.params.subscribe(params => {

      this.appService.editUsers(params['id']).subscribe(res => {

        this.edituser = res;

      });

    });

  }



  updateUser(firstName,lastName,email) {

   this.route.params.subscribe(params => {

      this.appService.editUsers(firstName);

      this.router.navigate(['edituser']);

   });
  }

}
