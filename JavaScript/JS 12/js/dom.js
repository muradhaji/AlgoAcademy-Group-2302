// console.dir(document.body.childNodes[0].nodeType);
// console.dir(document.body.childNodes[1].nodeType);
// console.dir(document.body.childNodes[2].nodeType);
// console.dir(document.body.childNodes[3].nodeType);
// console.dir(document.nodeType);

// console.dir(document.body.childNodes[0].nodeName);
// console.dir(document.body.childNodes[0].tagName);
// console.dir(document.body.childNodes[1].nodeName);
// console.dir(document.body.childNodes[1].tagName);
// console.dir(document.body.childNodes[3].nodeName);
// console.dir(document.body.childNodes[3].tagName);

// console.log(document.body.childNodes[1].innerHTML);
// console.log(document.body.childNodes[1].outerHTML);
// console.log(document.body.childNodes[1].textContent);
// console.log(document.body.childNodes[1].innerText);

// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[4]);
// console.log(document.body.childNodes[1].childNodes[1]);
// console.log(document.body.childNodes[3].nodeValue);
// console.log(document.body.childNodes[4].nodeValue);
// console.log(document.body.childNodes[1].childNodes[1].nodeValue);
// console.log(document.body.childNodes[3].data);
// console.log(document.body.childNodes[4].data);
// console.log(document.body.childNodes[1].childNodes[1].data);

// console.log(document.body.children[0].id);
// console.log(document.body.children[1].id);

// document.body.children[1].id = 'test1';

// console.log(document.body.children[0]["my-custom-attribute"]);

// console.log(document.body.children[0].hasAttribute('id'));
// console.log(document.body.children[1].hasAttribute('id'));

// console.log(document.body.children[0].getAttribute('id'));
// console.log(document.body.children[0].getAttribute('ID'));
// console.log(document.body.children[0].getAttribute('my-custom-attribute'));
// console.log(document.body.children[0].attributes);
// console.log(document.body.children[0].attributes[0]);
// console.log(document.body.children[0].attributes[0].nodeType);
// console.log(document.body.children[0].attributes[0].name);
// console.log(document.body.children[0].attributes[0].value);
// console.log(document.body.children[0].attributes[1].name);
// console.log(document.body.children[0].attributes[1].value);

// console.log(document.body.children[1].getAttribute('id'));

// document.body.children[1].setAttribute('id', 'myhead2');
// document.body.children[1].setAttribute('ID', 'myhead2');
// document.body.children[1].removeAttribute('id');

// document.body.children[0].setAttribute('my-custom-attribute', 'changed');
// document.body.children[0].attributes[1].value = 'changed';

// let elem = document.body.children[0];

// for (let i = 0; i < elem.attributes.length; i++) {
//   let attr = elem.attributes[i];
//   console.log(`${attr.name} --> ${attr.value}`);
// }

// console.log(document.body.children[0].dataset);
// console.log(document.body.children[0].dataset.age);
// console.log(document.body.children[0].dataset.name);

let calcArray = [];

function numberClick(elem) {
  if (document.getElementById('screen').innerText === '0') {
    document.getElementById('screen').innerText = '';
  }
  document.getElementById('screen').innerText += elem.dataset.value;
}

function operatorClick(elem) {
  let caclScreen = document.getElementById('screen');
  switch (elem.dataset.value) {
    case 'delete':
      break;
    case 'plus':
      calcArray.push(caclScreen.innerText);
      calcArray.push('plus');
      caclScreen.innerText += `+`;
      break;
    case 'dot':
      break;
    case 'divide':
      break;
    case 'multiply':
      break;
    case 'reset':
      break;
    case 'calc':
      break;
    default:
      break;
  }
}

function btnClick(elem) {
  if (elem.dataset.btnType === 'number') {
    numberClick(elem);
  } else {
    operatorClick(elem);
  }
}
