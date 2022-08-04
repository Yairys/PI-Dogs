import rootReducer from './index';
import {
   GET_DOGS,
   GET_TEMPS
} from '../Actions/index';


describe('Reducer', () => {
   const state = {
    dogs : [],
    allDogs:[],
    detail:[],
    activeFilters:[],
    temperaments :[]
   };

   it('Debería retornar el estado inicial si no se pasa un type válido', () => {
      expect(rootReducer(undefined, [])).toEqual({
        dogs : [],
        allDogs:[],
        detail:[],
        activeFilters:[],
        temperaments :[]
      });
   });


   
});
