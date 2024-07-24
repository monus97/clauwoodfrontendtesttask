import { BOTH_ON, TOGGLE_LIGHT } from "../action_types";

export const toggleLight = (room, light) => ({
  type: TOGGLE_LIGHT,
  payload: { room, light },
});

export const bothOn = (room) => ({
  type: BOTH_ON,
  payload: { room },
});
