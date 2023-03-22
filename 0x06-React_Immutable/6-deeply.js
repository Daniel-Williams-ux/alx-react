import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const mapP1 = Map(page1);
  const mapP2 = Map(page2);
  return mapP1.mergeDeep(mapP2);
}