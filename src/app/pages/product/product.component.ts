import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  userForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}
}
