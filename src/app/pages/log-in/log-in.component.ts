import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logForm!: FormGroup;

  constructor(private titleService: Title,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.titleService.setTitle('Protected Page');
    this.logForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
}
