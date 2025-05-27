import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-codigo',
  imports: [],
  templateUrl: './informacion-codigo.component.html',
  styleUrl: './informacion-codigo.component.scss'
})
export class InformacionCodigoComponent {
  angular(){
    window.location.href = 'https://angular.dev/';
  }
  springboot(){
    window.location.href = 'https://spring.io/projects/spring-boot';
    
  }
  weka(){
    window.location.href = 'https://www.weka.io/';
    
  }


}
