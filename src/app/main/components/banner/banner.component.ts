import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
// Seleciona o botão de trigger do menu com tipagem correta
 triggerMenu = document.querySelector<HTMLElement>('.menu-trigger');

// Verifica se o elemento existe antes de adicionar o evento
if (triggerMenu: { addEventListener: (arg0: string, arg1: () => void) => void; }) {
  triggerMenu.addEventListener('click', this.handleNavigation);
}

 handleNavigation(): void {
  const body = document.querySelector<HTMLElement>('body');
  
  // Verifica se o 'body' foi encontrado
  if (body) {
    body.classList.toggle('is-navigation-open');
  }
}

}
