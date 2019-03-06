import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { iPlayer } from '../app/player';
import { Observable } from 'rxjs';

@Injectable()

export class PlayerService {

  //passed by the InMemoryDataService
  private webURI:string = 'api/players';

  private httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) 
   { 
    console.log('HttpDemoService::constructor()');
   }

   public getPlayers():Observable<iPlayer[]>
   {
    return this.http.get<iPlayer[]>(this.webURI);
   }

   public getPlayer(player:iPlayer):Observable<iPlayer>
   {
     let url:string = this.webURI + "/" + player.id;
     return this.http.get<iPlayer>(this.webURI, this.httpOptions);
   }

   public addPlayer(player:iPlayer):Observable<iPlayer>
   {
     return this.http.post<iPlayer>(this.webURI, player, this.httpOptions);
   }
}
