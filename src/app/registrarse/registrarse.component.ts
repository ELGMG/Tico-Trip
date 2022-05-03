import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {pipe} from 'rxjs';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  public registrarseForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.registrarseForm = this.formBuilder.group({
      nombre:[''],
      apellido:[''],
      correo:[''],
      contrasena:['']
    })
  }
registrarse(){
  this.http.post<any>("http://localhost:3000/registroUsuarios", this.registrarseForm.value)
  .subscribe(res=>{
    alert("Resgitro Existosamente!!");
    this.registrarseForm.reset();
    this.router.navigate(['login']);
  })
}

}

