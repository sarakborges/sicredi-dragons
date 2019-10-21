import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { Dragon } from '@models/dragon.model';
import { DragonService } from '@services/dragon.service';

@Component({
  selector: 'app-dragons-form',
  templateUrl: './dragons-form.component.html',
  styleUrls: ['./dragons-form.component.scss']
})
export class DragonsFormComponent {
  dragon: Dragon;
  isEdit: boolean = false;
  isLoading: boolean = false;

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (!!this.activatedRoute.snapshot.params.id) {
      const id = this.activatedRoute.snapshot.params.id;
      this.isLoading = true;

      this.dragonService.getDragon(id).subscribe({
        next: dragon => {
          this.dragon = dragon;
          this.isEdit = true;
          this.isLoading = false;

          this.form.setValue({
            name: this.dragon.name,
            type: this.dragon.type
          });
        },

        error: err => {
          console.log(err);
          this.isLoading = false;
        }
      });
    }
  }

  submitDragon() {
    if (this.form.valid) {
      const date = new Date();

      const newDragon: Dragon = {
        id: null,
        name: this.form.controls.name.value,
        type: this.form.controls.type.value,
        createdAt: date.toISOString(),
        histories: []
      };

      if (!this.isEdit) {
        this.dragonService.createDragon(newDragon).subscribe({
          next: dragon => {
            Swal.fire({
              title: `Sucesso!`,
              html: `Registros sobre <b>${dragon.name}</b> criados com sucesso! Confira abaixo: <br><br>- Nome: ${dragon.name}<br>- Tipo: ${dragon.type}`,
              type: 'success'
            }).then(() => {
              this.router.navigate(['/', 'main', 'dragons']);
            });
          }
        });
      } else if (this.isEdit) {
        newDragon.id = this.dragon.id;
        newDragon.createdAt = this.dragon.createdAt;

        this.dragonService.updateDragon(this.dragon.id, newDragon).subscribe({
          next: dragon => {
            Swal.fire({
              title: `Sucesso!`,
              html: `Registros sobre <b>${dragon.name}</b> editados com sucesso! Confira abaixo: <br><br>- Nome: ${dragon.name}<br>- Tipo: ${dragon.type}`,
              type: 'success'
            }).then(() => {
              this.router.navigate(['/', 'main', 'dragons']);
            });
          }
        });
      }
    } else {
      this.form.controls.name.markAsDirty();
      this.form.controls.type.markAsDirty();
    }
  }
}
