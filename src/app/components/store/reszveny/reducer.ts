import { ReszvenyAction, ReszvenyActionTypes } from './actions';
import { UjReszveny } from "src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model";
import { User } from 'src/app/models/user/user.model';

const initialState: Array<UjReszveny> = [];

const initialKotesState: Array<number[]> = [];

const initialUserState: User = new User();

export function ReszvenyReducer(state: Array<UjReszveny> = initialState, action: ReszvenyAction) {
  switch (action.type) {
    case ReszvenyActionTypes.ADD_RESZVENY:
      return [...state, action.payload];
    case ReszvenyActionTypes.CLEAR_RESZVENY_ACTION:
      state = undefined;
      return state;
    case ReszvenyActionTypes.UPDATE_RESZVENY:
      return handleUpdateReszveny(state, action.payload);
    case ReszvenyActionTypes.UPDATE_RESZVENY_STATUS:
      return handleUpdateReszvenyStatus(state, action.payload);
    default:
      return state;
  };
}

export function KotesReducer(stateKotes: Array<number[]> = initialKotesState, action: ReszvenyAction) {
  switch (action.type) {
    case ReszvenyActionTypes.ADD_KOTES:
      stateKotes = [];
      return [...stateKotes, action.payload];
    default:
      return stateKotes;
  }
}

export function UserReducer(state: User = initialUserState, action: ReszvenyAction){
    switch(action.type){
      case ReszvenyActionTypes.ADD_USER:
        return action.payload;
      default:
        return state;
    }
}

function handleUpdateReszveny(state: Array<UjReszveny>, payload: UjReszveny): Array<UjReszveny> {

  // index of searched element
  const elementsIndex = state.findIndex(element => element.$id == payload.$id);

  // Hozzunk létre egy másdolatot
  let copyState = [...state];

  copyState[elementsIndex] = payload;

  // pass to original state array

  state = copyState;

  return state;
}

function handleUpdateReszvenyStatus(state: Array<UjReszveny>, payload: any): Array<UjReszveny> {

  // index of searched element
  const elementsIndex = state.findIndex(element => element.$id == payload.reszveny.$id);

  // Hozzunk létre egy másdolatot
  let copyState = [...state];
  payload.reszveny.$befektetesAdatok.$status = payload.status;
  copyState[elementsIndex] = payload.reszveny;

  // pass to original state array

  state = copyState;

  return state;
}
