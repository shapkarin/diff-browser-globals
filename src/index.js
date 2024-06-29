import { browser } from 'globals';

export default function () {
  const defaultKeys = Object.keys(browser)
    .reduce((acc, n) => ({ ...acc, [n]: true }), {});

  return Object.keys(window).filter(key => !defaultKeys[key]);
};