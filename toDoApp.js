

// function add(){
//   if(document.getElementById('inputTxtBox').value !== null)
//   {
//       var getWork = document.getElementById('inputTxtBox').value;
//       var newWork = document.createElement('li');
//       var tagWork = document.createTextNode(getWork);
//       newWork.appendChild(tagWork);
//       document.getElementById('list').appendChild(newWork);
//       document.getElementById('inputTxtBox').value = "";
//       console.log('if')
//   }
// else if(document.getElementById('inputTxtBox').value === null)
//   {
//     alert('You have entered nothing')
//     console.log('else')
//   }

// }

function deleteAll() {
  document.getElementById('list').innerHTML = '';
}















function add() {
  var getInput = document.getElementById('inputTxtBox').value;
  var newInput = document.createElement('li');
  var createInput = document.createTextNode(getInput);

  var img = document.createElement('img');
 img.classList.add('cross')
  img.src = 'cross.png';
  img.onclick = function () {
    var del = this.parentNode;
    var dlt = del.parentNode;
    dlt.removeChild(del);
  };

  newInput.appendChild(img);
  newInput.appendChild(createInput);
  if (getInput === '') {
    alert('Please write something');
  }
  else {
    document.getElementById('list').appendChild(newInput);
  }
  document.getElementById('inputTxtBox').value = "";




}




