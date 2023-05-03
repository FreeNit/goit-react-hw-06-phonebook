import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

// export const filterReducer = createReducer(filterInitialState, {
//   [setNewFilterValue]: (state, action) => {
//     return { ...state, filter: action.payload.filter };
//   },
// });

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setNewFilterValue: {
      reducer(state, action) {
        return { ...state, filter: action.payload.filter };
      },
      prepare(filterValue) {
        return {
          payload: {
            filter: filterValue,
          },
        };
      },
    },
  },
});

// Export actions generator and reducer
export const { setNewFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
