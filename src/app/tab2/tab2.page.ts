import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  montoRecarga: number = 0;

  constructor() {}

  recargar() {
    if (this.montoRecarga < 20) {
      alert('El monto mínimo de recarga es 20');
      return;
    }
    if (this.montoRecarga > 300) {
      alert('El monto máximo de recarga es 300');
      return;
    }
    
    // Aquí puedes agregar la lógica de recarga
    console.log('Recargando monto:', this.montoRecarga);
    alert(`Recarga exitosa por $${this.montoRecarga}`);
  }

}
