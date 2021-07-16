import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',   ---> <div app-servers></div>
  // selector: '.app-servers',    ---> <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  server = ['Testserver, Devserver, Uatserver'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.server.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }

  onServerUpdateName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit() {
  }

}
