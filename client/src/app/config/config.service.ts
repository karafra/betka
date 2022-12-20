import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from "./app.config";
import {lastValueFrom} from "rxjs";
import {Password} from "../models/password";

@Injectable({providedIn: 'root'})
export class ConfigService {

  appConfig: AppConfig = {} as AppConfig;

  constructor(private http: HttpClient) {}

  async loadAppConfig() {
    await lastValueFrom(
      this.http.get('/assets/config/configuration.json')
    )
      .then(body => this.appConfig = body as AppConfig)
    await lastValueFrom(
      this.http.get(`${this.appConfig.apiBaseUrl}/passwords/all`)
    ).then(passwords => this.appConfig.data = passwords as Password[])
    return lastValueFrom(
      this.http.get(`${this.appConfig.apiBaseUrl}/options/countries`)
    ).then(countries => this.appConfig.countries = countries as string[])
  }

}
