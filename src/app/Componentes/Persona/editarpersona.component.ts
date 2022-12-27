import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaS: PersonaService, private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al Modificar la Persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      data => {
        alert("Modificacion Correcta");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo Modificar la Persona");
        this.router.navigate(['']);
      }
    )
  }

}
