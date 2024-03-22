var size = 5;
var texts = ["Died on Ship", "Mask", "Turret", "Suffocated", "Knight", "Eyeless dogs", "Left Behind", "Gave up", "Jester", "Doesn't heed warning", "Gravity", "Giant", "Bracken", "Harp Ghost", "Zeus Got em", "Landmine", "Rolling Giant", "Snare Bug", "Bunker Spider", "Hoarding Bug", "Ghost Girl", "Nut Cracker", "Dawsomegamer", "Vatic", "Coil Head", "Shrimp", "Immortal Snail", "The Fiend", "Mimic", "Demogorgon", "Shy Guy", "Slime", "Pressed the red button"];
if (texts.length != 33) {
  alert('You should have exactly ' + (33) + ' texts defined!');
}

var cards = (function createCards() {
  var cards = [];
  var table = document.getElementById('bingotable');
  for (var y = 0; y < size; y++) {
    var tr = document.createElement('tr');
    var rowCards = [];
    cards.push(rowCards);
    table.appendChild(tr);
    for (var x = 0; x < size; x++) {
      var td = document.createElement('td');
      td.classList.add('tableButton');
      /*       var tf = document.getElementById("tablefree");             tf.children[2].classlist.add('squarefree'); */
      td.onclick = select(x, y);
      tr.appendChild(td);
      rowCards.push({ element: td });
    }
  }
  return cards;
})();

function select(x, y) {
  return function () {
    var card = cards[y][x];
    if (!card.selected) {
      card.element.classList.add('selected');
      card.selected = true;
      checkOver();
    }
  };
}

function lineSelected(x, y, dx, dy) {
  var r = true;
  while (r && x >= 0 && x < size && y >= 0 && y < size) {
    r = r && cards[y][x].selected
    x += dx, y += dy;
  }
  return r;
}

function checkOver() {
  var hasLine = lineSelected(0, 0, 1, 1) || lineSelected(size - 1, 0, -1, 1);
  for (i = 0; i < size; i++) {
    hasLine = hasLine || lineSelected(i, 0, 0, 1) || lineSelected(0, i, 1, 0);
  }
  if (hasLine) {
    setTimeout(function () {
      alert('Bingo!');
      init();
    }, 100);
  }
}

function init() {
  var a = Array.from(texts);
  a.sort((a, b) => 0.5 - Math.random());
  for (var i = 0; i < a.length; i++) {
    var x = i % size, y = Math.floor(i / size);
    var card = cards[y][x];
    card.element.innerText = a[i];
    card.element.classList.remove('selected');
    card.selected = false;
  }
}

init();