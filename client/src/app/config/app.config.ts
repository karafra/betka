import {Password} from "../models/password";

export interface AppConfig {
  apiBaseUrl: string
  countries: string[]

  data: Password[]
}
