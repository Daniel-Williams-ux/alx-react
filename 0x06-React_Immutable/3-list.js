import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const newList = List(list);
  return newList.push(element);
}