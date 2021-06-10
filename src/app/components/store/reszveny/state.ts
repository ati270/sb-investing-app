import { UjReszveny } from "src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model";
import { User } from "src/app/models/user/user.model";

export interface AppState{
  readonly reszvenyek: UjReszveny[];

}

export interface AppKotesState{
  readonly kotesek: number[];
}

export interface AppUserState{
  readonly user: User;
}
