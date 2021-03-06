import { ReszvenyAction, ReszvenyActionTypes } from './actions';
import { UjReszveny } from "src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model";
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { MentalisElemzes } from 'src/app/models/uj-befektetes-models/mentalis-elemzes/mentalis-elemzes.model';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { VallalatKockazatElemzes } from 'src/app/models/uj-befektetes-models/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model';

const initialState: Array<UjReszveny> = [];

export function ReszvenyReducer(state: Array<UjReszveny> = initialState, action: ReszvenyAction) {
  switch (action.type) {
    case ReszvenyActionTypes.ADD_RESZVENY:
      return [...state, action.payload]
    default:
      return state;
  }
}
