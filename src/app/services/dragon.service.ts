import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragon } from '@models/dragon.model';
import { environment } from '@environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  constructor(private httpClient: HttpClient) {}

  getAllDragons(): Observable<Array<Dragon>> {
    return this.httpClient.get<Array<Dragon>>(`${environment.uri}/dragon`);
  }

  getDragon(id: string): Observable<Dragon> {
    return this.httpClient.get<Dragon>(`${environment.uri}/dragon/${id}`);
  }

  createDragon(dragon: Dragon): Observable<Dragon> {
    return this.httpClient.post<Dragon>(`${environment.uri}/dragon`, {
      params: dragon
    });
  }

  updateDragon(id: string, dragon: Dragon): Observable<Dragon> {
    return this.httpClient.put<Dragon>(`${environment.uri}/dragon/${id}`, {
      params: dragon
    });
  }

  deleteDragon(id: string): Observable<Dragon> {
    return this.httpClient.delete<Dragon>(`${environment.uri}/dragon/${id}`);
  }
}
