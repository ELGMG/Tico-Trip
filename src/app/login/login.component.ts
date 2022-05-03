import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'; 
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router ){} 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      correo:[''],
      contrasena:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/registroUsuarios")
    .subscribe(res=>{
     const user = res.find((a:any)=>{
       return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena

    });
    if(user){
      alert("Login Exitosamente");
      this.loginForm.reset();
      this.router.navigate(["HomeLink"])
     

    }else{
      alert("Usuario no encontrado");
    }
    })
      }
    }
  