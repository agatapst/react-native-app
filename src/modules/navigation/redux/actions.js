const prefix = '@@navigation/';

export const CHANGE_SCREEN = `${prefix}CHANGE_SCREEN`;

export const changeScreen = (screen) => ({
  type: CHANGE_SCREEN,
  screen,
});
