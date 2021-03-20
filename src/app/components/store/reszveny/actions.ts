import { Action } from "@ngrx/store";
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

export enum ReszvenyActionTypes {
  ADD_RESZVENY = '[RESZVENY] Add Reszveny',
  ADD_KOTES = '[KOTES] Add Kotes',
  UPDATE_RESZVENY = '[RESZVENY] Update Reszveny'
  //REMOVE_RESZVENY = '[RESZVENY] Remove Reszveny'
}


export class AddReszvenyAction implements Action {

    readonly type = ReszvenyActionTypes.ADD_RESZVENY;

    constructor(public payload: UjReszveny){}
}

export class AddKotesAction implements Action {

  readonly type = ReszvenyActionTypes.ADD_KOTES;

  constructor(public payload: number[]){}
}

export class UpdateReszvenyAction implements Action{
  readonly type = ReszvenyActionTypes.UPDATE_RESZVENY;

  constructor(public payload: UjReszveny){}

}

/*export class RemoveReszveny implements Action {
    readonly type = ReszvenyActionTypes.REMOVE_RESZVENY;

    constructor(public payload: number) {}
}*/

export type ReszvenyAction = AddReszvenyAction | UpdateReszvenyAction | AddKotesAction;

