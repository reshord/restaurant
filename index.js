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


window.addEventListener('click', (event) => {
    const btn = event.target.classList == 'card-btn'
    const modalBlock = document.querySelector('.modal-global_block')
    if(btn) {
        modalBlock.innerHTML = ''
        const card = event.target.closest('.card')
        const productInfo = {
            title: card.querySelector('.card-title').innerHTML,
            img: card.querySelector('.card-image img').getAttribute('src'),
            weight: card.querySelector('.card-weight').innerHTML,
            price: card.querySelector('.card-price').innerHTML,
        }
        const moduleCart = document.createElement('div')
              moduleCart.innerHTML =  `
              <div class="modal-block-image">
              <img style="margin-top: 20px; width: 170px; height: 110px;" class="modal-image" src="${productInfo.img}" alt="">
          </div>
          <div class="modal-block">
              <div class="card-title">${productInfo.title}c</div>
              <div class="card-weight">${productInfo.weight}</div>
              <div class="card-price">${productInfo.price}</div>
              <button class="card-btn btn">Order</button>
          </div>
        `
        modalBlock.appendChild(moduleCart)
    }
})


// btn.forEach(btnEl => {
//     btnEl.addEventListener('click', (event) => {
//         if(btnEl) {
//             const card = event.target.closest('.card')
//             const infoProduct = {
//                 title: card.querySelector('.cart-title').innerHTML
//             }
//             console.log(infoProduct.title);
//         }
//     })
// })


const modalOpen = document.querySelector('.favourites'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-close')

modalOpen.addEventListener('click', () => {
    modal.classList.add('active')
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('active')
})




// const wrapperBlock = document.querySelectorAll('.wrapper-block__sidebar__block1')
const wrapperBlock = document.querySelector('.wrapper-block__sidebar_element')




const sortProduct = (arr) => {
    arr.forEach(product => {
        const div = document.createElement('div')
        div.innerHTML = product.title
        div.style.color = 'white'
        div.style.marginLeft = '25px'
        div.style.marginTop = '12px'
        div.style.cursor = 'pointer'

        wrapperBlock.append(div)
    })

    // wrapperBlock.forEach(label => {
    //     const itemEl = label.children[1]
    //     itemEl.addEventListener('click', () => {
    //         content.innerHTML = ''
    //         const res = arr.filter(el => {
    //             if(el.title === itemEl.innerHTML) {
    //                 const div = document.createElement('div')
    //                       div.classList = 'card-block'  
    //                       div.innerHTML = `
    //                             <div class="card">
    //                             <div class="card-title">${el.title}</div>
    //                             <div class="card-image">
    //                                 <img src="${el.img}" alt="">
    //                             </div>
    //                             <div class="card-footer">
    //                                 <div class="card-weight">${el.weight}</div>
    //                                 <div class="card-price">${el.price}</div>
    //                             </div>
    //                             <button class="card-btn">Delivery</button>
    //                         </div>
    //                             ` 
    //           content.append(div)
    //             }
    //         })
    //     })
    // })
}

sortProduct(arr)