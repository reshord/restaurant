const content = document.querySelector('.wrapper-block__content')


const arr = [
    {
        title: 'Big Mac', img: './big-mac.jpg', weight: '220gr', price: '600p'
    },
    {
        title: 'Hamburger', img: './hamburger.jpg', weight: '140gr', price: '200p'
    },
    {
        title: 'Double Cheeseburger', img: './double-cheeseburger.jpg', weight: '180gr', price: '260p'
    },
    {
        title: 'Run Tasty', img: './run-tasty.jpg', weight: '260gr', price: '300p'
    },
    {
        title: 'McCicken', img: './McCicken.jpg', weight: '200gr', price: '250p'
    },
    {
        title: 'Fish Roll', img: './fish-roll.jpg', weight: '320gr', price: '340p'
    },
    {
        title: 'Roll with shrimp', img: './roll-with-shrimp.jpg', weight: '280gr', price: '310p'
    },
]

const render = arr => {
    arr.forEach(card => {
        const div = document.createElement('div')
              div.classList = 'card-block'  
              div.innerHTML = `
              <div class="card">
              <div class="card-title">${card.title}</div>
              <div class="card-image">
                  <img src="${card.img}" alt="">
              </div>
              <div class="card-footer">
                  <div class="card-weight">${card.weight}</div>
                  <div class="card-price">${card.price}</div>
              </div>
              <button class="card-btn">Delivery</button>
          </div>
              ` 
              content.append(div)
    })
}

render(arr)