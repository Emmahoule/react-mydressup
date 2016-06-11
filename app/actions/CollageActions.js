export const COLLAGE_ADD_ITEM = 'COLLAGE_ADD_ITEM'
export const COLLAGE_UPDATE_ITEM = 'COLLAGE_UPDATE_ITEM'
export const COLLAGE_REMOVE_ALL_ITEMS = 'COLLAGE_REMOVE_ALL_ITEMS'
export const COLLAGE_DELETE_ITEM = 'COLLAGE_DELETE_ITEM'

export function collageAddItem(listItems, id, item) {
  listItems[id] = item;
  return {
    type: COLLAGE_ADD_ITEM,
    listItems: listItems
  }
}

export function collageRemoveAllItems() {
  return {
    type: COLLAGE_REMOVE_ALL_ITEMS,
    listItems: {}
  }
}

export function collageUpdateItem(listItems, id, key, newValue) {
	listItems[id][key] = newValue;
  return {
    type: COLLAGE_UPDATE_ITEM,
    listItems: listItems
  }
}


export function collageDeleteItem(listItems, id) {
  delete listItems[id];
  return {
    type: COLLAGE_DELETE_ITEM,
    listItems: listItems
  }
}