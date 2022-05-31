const content = document.querySelector('.wrapper-block__content')


const arr = [
    {
        title: 'Big Mac', class: 'Burgers and rolls', img: './big-mac.jpg', weight: 220, price: 600
    },
    {
        title: 'Hamburger', class: 'Happy Mil', img: './hamburger.jpg', weight: 140, price: 200
    },
    {
        title: 'Double Cheeseburger', class: 'Burgers and rolls', img: './double-cheeseburger.jpg', weight: 180, price: 260
    },
    {
        title: 'Run Tasty', img: './run-tasty.jpg', weight: 260, price: 300
    },
    {
        title: 'McCicken', class: 'Burgers and rolls', img: './McCicken.jpg', weight: 200, price: 250
    },
    {
        title: 'Fish Roll', img: './fish-roll.jpg', weight: 320, price: 340
    },
    {
        title: 'Roll with shrimp', img: './roll-with-shrimp.jpg', weight: 280, price: 310
    },
    {
        title: 'Chicken McNuggets', class: 'Happy Mil', img: './ChickenMcNuggets.jpg', weight: 190, price: 210
    },
    {
        title: 'McMuffin', class: 'Breakfast', img: './McMuffin.jpg', weight: 230, price: 290
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
                  <div class="card-weight">${card.weight}gr</div>
                  <div class="card-price">${card.price}p</div>
              </div>
              <button class="card-btn">Delivery</button>
          </div>
              ` 
              content.append(div)
              
              
    })
}




render(arr)

let counterNum = 0;

window.addEventListener('click', (event) => {
    const btn = event.target.classList == 'card-btn'
    const modalBlock = document.querySelector('.modal-global_block'),
          counter = document.querySelector('.counter-radius')
          
    if(btn) {
        modalBlock.innerHTML = ''
        const card = event.target.closest('.card')
        counter.innerHTML = ++counterNum
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

const check = document.querySelector('#check')
const check1 = document.querySelector('#check1')

const sortProduct = (arr) => {
    check.addEventListener('click', () => {
        check1.checked = false
        
        content.innerHTML = ''
        
        if(check.checked === true) {

            arr.sort((a,b) => a.price - b.price).forEach(el => {
                const div = document.createElement('div')
                      div.innerHTML = `
                      <div class="card">
                      <div class="card-title">${el.title}</div>
                      <div class="card-image">
                          <img src="${el.img}" alt="">
                      </div>
                      <div class="card-footer">
                          <div class="card-weight">${el.weight}gr</div>
                          <div class="card-price">${el.price}p</div>
                      </div>
                      <button class="card-btn">Delivery</button>
                  </div>
                      `

                      content.append(div)
            }) 
        } 
    })
    
    
}
sortProduct(arr)

const sortProduct2 = (arr) => {
    check1.addEventListener('click', () => {
        check.checked = false
        content.innerHTML = ''
        if(check1.checked === true) {

            arr.sort((a,b) => a.weight - b.weight).forEach(el => {
                const div = document.createElement('div')
                      div.innerHTML = `
                      <div class="card">
                      <div class="card-title">${el.title}</div>
                      <div class="card-image">
                          <img src="${el.img}" alt="">
                      </div>
                      <div class="card-footer">
                          <div class="card-weight">${el.weight}gr</div>
                          <div class="card-price">${el.price}p</div>
                      </div>
                      <button class="card-btn">Delivery</button>
                  </div>
                      `

                      content.append(div)
            }) 
        } 
     })
}
sortProduct2(arr)



// const wrapperBlock = document.querySelectorAll('.wrapper-block__sidebar__block1')


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



// const checkbox = document.querySelector('#check')

// const sort = (arr) => {
//     checkbox.addEventListener('click',() => {
//         content.innerHTML = ''
//         if(checkbox.checked !== true) {
//             content.innerHTML = ''
//             arr.forEach(card => {
//                 const div = document.createElement('div')
//                       div.classList = 'card-block'  
//                       div.innerHTML = `
//                       <div class="card">
//                       <div class="card-title">${card.title}</div>
//                       <div class="card-image">
//                           <img src="${card.img}" alt="">
//                       </div>
//                       <div class="card-footer">
//                           <div class="card-weight">${card.weight}gr</div>
//                           <div class="card-price">${card.price}</div>
//                       </div>
//                       <button class="card-btn">Delivery</button>
//                   </div>
//                       ` 
//                       content.append(div)
                      
                      
//             })
//         }
//         arr.sort((a,b) => a.weight - b.weight).forEach(el => {
//                 const itemPr = document.createElement('div')
//                        itemPr.innerHTML = `
//                        <div class="card">
//                        <div class="card-title">${el.title}</div>
//                        <div class="card-image">
//                            <img src="${el.img}" alt="">
//                        </div>
//                        <div class="card-footer">
//                            <div class="card-weight">${el.weight}gr</div>
//                            <div class="card-price">${el.price}</div>
//                        </div>
//                        <button class="card-btn">Delivery</button>
//                    </div>
//                        `
//                        content.appendChild(itemPr)
//             })
//         })
            
     
// }
// sort(arr)




