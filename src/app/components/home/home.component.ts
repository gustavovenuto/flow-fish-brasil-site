import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['colocacao', 'nome', 'medida', 'action'];


  date: any = [{colocacao: 1, nome: 'Gustavo', medida:'65cm'},
              {colocacao: 2, nome: 'Thiago', medida:'55cm'},
              {colocacao: 3, nome: 'Yuri', medida:'54cm'},
              {colocacao: 4, nome: 'Guilherme', medida:'53.5cm'},
              {colocacao: 5, nome: 'João', medida:'53cm'}];


  constructor() { }

  ngOnInit(): void {
  }

}
