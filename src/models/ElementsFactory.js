export class ElementsFactory {
  constructor() {
  }

  static create(elementType, id, text) {
	  let element = document.createElement(elementType);
	  element.id = id;
	  element.innerText = text;
	  return element;
  }
}