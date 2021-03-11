import { ReszvenyAction, ReszvenyActionTypes } from './actions';
import { UjReszveny } from "src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model";

const initialState: Array<UjReszveny> = [];

export function ReszvenyReducer(state: Array<UjReszveny> = initialState, action: ReszvenyAction) {
  switch (action.type) {
    case ReszvenyActionTypes.ADD_RESZVENY:
      return [...state, action.payload];
    case ReszvenyActionTypes.UPDATE_RESZVENY:
      return handleUpdateReszveny(state, action.payload)
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
