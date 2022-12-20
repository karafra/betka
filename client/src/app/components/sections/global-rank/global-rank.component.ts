import {Component, OnInit} from '@angular/core';
import {Password} from "../../../models/password";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../../config/config.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-global-rank',
  templateUrl: './global-rank.component.html',
  styleUrls: ['./global-rank.component.scss']
})
export class GlobalRankComponent implements OnInit{

  public data: Password[];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
    ) {
  }

  async ngOnInit(): Promise<void> {
    this.data = await lastValueFrom(
      this.httpClient.get(
        `${this.configService.appConfig.apiBaseUrl}/passwords/top-by/globalRank`
      )
    ) as Password[]
  }

}
