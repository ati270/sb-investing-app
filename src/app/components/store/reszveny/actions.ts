import { Action } from "@ngrx/store";
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { User } from "src/app/models/user/user.model";

export enum ReszvenyActionTypes {
  ADD_RESZVENY = '[RESZVENY] Add Reszveny',
  ADD_USER = '[USER] Add User',
  ADD_KOTES = '[KOTES] Add Kotes',
  UPDATE_RESZVENY = '[RESZVENY] Update Reszveny',
  UPDATE_RESZVENY_STATUS = '[RESZVENY STATUS] Update Reszveny Status'
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

export class AddUserAction implements Action{
  readonly type = ReszvenyActionTypes.ADD_USER;

  constructor(public payload: User){}

}

export class UpdateReszvenyAction implements Action{
  readonly type = ReszvenyActionTypes.UPDATE_RESZVENY;

  constructor(public payload: UjReszveny){}

}

export class UpdateReszvenyStatusAction implements Action{
  readonly type = ReszvenyActionTypes.UPDATE_RESZVENY_STATUS;

  constructor(public payload:{reszveny: UjReszveny, status: string}){}

}

/*export class RemoveReszveny implements Action {
    readonly type = ReszvenyActionTypes.REMOVE_RESZVENY;

    constructor(public payload: number) {}
}*/

export type ReszvenyAction = AddReszvenyAction | UpdateReszvenyAction | UpdateReszvenyStatusAction | AddKotesAction | AddUserAction;

