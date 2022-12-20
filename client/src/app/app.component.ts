import {Component, OnInit} from '@angular/core';
import {Password} from "./models/password";
import {ConfigService} from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'd3-client';
  data: Password[]

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  ngOnInit(): void {
    this.data = this.configService.appConfig.data.slice(0, 10).sort((a, b) => {
      if (a.globalRank > b.globalRank) {
        return -1
      } else if (a.globalRank < b.globalRank) {
        return 1
      } else {
        return 0
      }
    })
  }
}
