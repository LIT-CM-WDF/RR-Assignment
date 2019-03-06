import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

CreateDb(){
  const players = [
    {id:1, text:'Rachel Ray'},
    {id:2, text:'Trisha Kavanagh'}
  ];
  return {players};
}

  constructor() { }
}
