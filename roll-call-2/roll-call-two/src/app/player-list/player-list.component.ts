import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { iPlayer } from '../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private players: iPlayer[] = [
    {
      id:1,
      text: 'loading'
    },
    {
      id:2,
      text:'loading'
    }
  ];

  constructor(private playerService:PlayerService) { }

  ngOnInit() {

    console.log('HttpDemoComponents::ngOnInit()');

    this.playerService.getPlayers().subscribe(
      data=> {
        console.log(data);
        this.players = data;
      }
    );
  }

  public addNewItem(newItemText:string){
    let player:iPlayer = {id: null, text: newItemText};

    this.playerService.addPlayer(player).subscribe(
      newItem => {
        console.log(JSON.stringify(newItem));
        this.players.push(newItem);
      }
    );
  }

}
