import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  filteredDragons: Array<Dragon> = [];
  isLoading: boolean = true;

  form = this.formBuilder.group({
    filter: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService
  ) {}

  ngOnInit() {
    this.getDragons();
  }

  getDragons() {
    this.dragonService.getAllDragons().subscribe({
      next: dragons => {
        this.isLoading = false;
        this.filteredDragons = this.dragons = dragons;
      }
    });
  }

  filterDragons() {
    this.filteredDragons = this.dragons.filter(dragon => {
      if (
        !this.form.controls.filter.value ||
        dragon.name
          .toLowerCase()
          .includes(this.form.controls.filter.value.toLowerCase())
      ) {
        return dragon;
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
