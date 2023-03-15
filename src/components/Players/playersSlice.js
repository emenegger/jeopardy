import { createSlice, current } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: {
    // * Can I just initiliaze initial state to an empty array instead of adding a players property?
    players: [],
  },
  reducers: {
    addPlayer: (state, action) => {
      state.players = [...state.players, action.payload];
    },
    addPointsToPlayer: (state, action) => {
      console.log(action.payload.points);
      const i = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      console.log(state.players[i]);
      state.players = [
        ...state.players.slice(0, i),
        Object.assign({}, state.players[i], {
          points: (state.players[i].points += action.payload.points),
        }),
        ...state.players.slice(i + 1),
      ];
      console.log(current(state))
    },
  },
});

export const { addPlayer, addPointsToPlayer } = playersSlice.actions;

export default playersSlice.reducer;
