import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../config/config.service";

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent implements OnInit{
  apiBaseUrl = ''

  constructor(private readonly configService: ConfigService) {

  }

  ngOnInit() {
    this.apiBaseUrl = this.configService.appConfig.apiBaseUrl
  }
}
