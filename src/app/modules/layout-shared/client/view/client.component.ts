import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientData = [
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/1.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    },
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/2.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    },
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/3.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    },
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/4.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    },
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/5.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    },
    {
      clientName: "TUI GROUP",
      img : '../assets/images/clients/6.jpg',
      clientWork: 'Lorem ipsum dolor sit amet, consectetur adipisicing elittio Lorem ipsum dolor sit amet, consectetur adipisicing elittio.'
    }
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
