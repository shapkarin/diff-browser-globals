import { browser } from 'globals';

import toAddLaterWithPR from './toAddLaterWithPR';

export default function(){
  const defaultKeys = Object.keys(browser)
    .concat(toAddLaterWithPR)
    .reduce((acc, n) => { ...acc, [n]: true }, {});

  return Object.keys(window).filter(key => !defaultKeys[key]);
};
