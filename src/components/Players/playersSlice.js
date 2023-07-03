import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      // state = [...state, action.payload];
      return [...state, action.payload];
      // state.players = [...state.players, action.payload];
    },
    addPointsToPlayer: (state, action) => {
      const i = state.findIndex((player) => player.id === action.payload.id);
      state = [
        ...state.slice(0, i),
        Object.assign({}, state[i], {
          points: (state[i].points += action.payload.points),
        }),
        ...state.slice(i + 1),
      ];
    },
    removePointsFromPlayer: (state, action) => {
      const i = state.findIndex((player) => player.id === action.payload.id);
      state = [
        ...state.slice(0, i),
        Object.assign({}, state[i], {
          points: (state[i].points -= action.payload.points),
        }),
        ...state.slice(i + 1),
      ];
    },
  },
});

export const { addPlayer, addPointsToPlayer, removePointsFromPlayer } =
  playersSlice.actions;

export default playersSlice.reducer;
