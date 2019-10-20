import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { Dragon } from '@models/dragon.model';
import { DragonService } from '@services/dragon.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  dragons: Array<Dragon> = [];
  isLoading: boolean = true;

  constructor(private dragonService: DragonService) {}

  ngOnInit() {
    this.getDragons();
  }

  getDragons() {
    this.dragonService.getAllDragons().subscribe({
      next: dragons => {
        this.isLoading = false;
        this.dragons = dragons;
      }
    });
  }

  deleteDragon(id: string) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esse registro não poderá ser restaurado.',
      type: 'warning',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then(() => {
      this.dragonService.deleteDragon(id).subscribe({
        next: res => {
          Swal.fire({
            title: 'Registro apagado',
            html: `O registro de <b>${
              res.name ? res.name : 'Criatura sem nome'
            }</b> foi permanentemente removido do bestiário.`,
            type: 'success'
          });

          const dragonIndex = this.dragons.findIndex(
            dragon => dragon.id === id
          );
          this.dragons.splice(dragonIndex, 1);
        }
      });
    });
  }
}
