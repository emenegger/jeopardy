import { createSlice, current } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: [],
  // initialState: {
  //   players: [],
  // },
  reducers: {
    addPlayer: (state, action) => {
      // state = [...state, action.payload];
      return [...state, action.payload];
      // state.players = [...state.players, action.payload];
    },
    addPointsToPlayer: (state, action) => {
      const i = state.findIndex(
        (player) => player.id === action.payload.id
      );
      state = [
        ...state.slice(0, i),
        Object.assign({}, state[i], {
          points: (state[i].points += action.payload.points),
        }),
        ...state.slice(i + 1),
      ];
    },
  },
});

export const { addPlayer, addPointsToPlayer } = playersSlice.actions;

export default playersSlice.reducer;
