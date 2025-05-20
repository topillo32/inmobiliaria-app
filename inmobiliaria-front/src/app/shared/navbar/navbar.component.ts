import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { nombre: 'Clientes', ruta: '/clientes', icono: 'people' },
    { nombre: 'Proyectos', ruta: '/proyectos', icono: 'apartment' },
    { nombre: 'Unidades', ruta: '/unidades', icono: 'home' }
  ];
  
  menuAbierto: boolean = false;
  itemActivo: string = '/clientes'; // Ruta activa por defecto
  
  constructor() { }

  ngOnInit(): void {
    // En una aplicación real, aquí se obtendría la ruta actual
    // this.itemActivo = this.router.url;
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  seleccionarItem(ruta: string): void {
    this.itemActivo = ruta;
    this.menuAbierto = false;
    
    // En una aplicación real, aquí se navegaría a la ruta
    // this.router.navigate([ruta]);
    
    // Para demostración, mostramos un mensaje
    console.log(`Navegando a: ${ruta}`);
  }
}