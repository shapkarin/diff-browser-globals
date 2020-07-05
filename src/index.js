import { browser } from 'globals';

import toAddLaterWithPR from './toAddLaterWithPR';

export default function(){
  try {
    const defaultKeys = new Set([...Object.keys(browser), ...toAddLaterWithPR]);
    const yours = new Set(Object.keys(window));
    
    return new Set([...yours].filter(key => !defaultKeys.has(key)));
  } catch (error) {
    throw new Error(error);
  }
};