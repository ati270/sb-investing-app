import { UjReszveny } from "src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model";

export interface AppState{
  readonly reszvenyek: UjReszveny[];

}

export interface AppKotesState{
  readonly kotesek: number[];
}
