function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  while (grandNode.querySelector('div')){
    grandNode = grandNode.querySelector('div')
  }
  return grandNode
}
