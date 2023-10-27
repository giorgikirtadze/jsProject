//swiper js
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
///////////////////////////////////

//registration modal-windows
let submit = document.querySelector('.submit');
let registration  = document.querySelector('.registration')
let modalwindow = document.querySelector('.modalwindow');
let registration_close = document.querySelector('.registration_close')

submit.addEventListener('click', function(){
  registration.style.display = 'block'
})
registration_close.addEventListener('click', function(){
  registration.style.display = 'none'
})
function updateRegistrationVisibility() {
  if (window.innerWidth <= 830) {
    registration.style.display = 'none';
    modalwindow.style.display = 'none'
  } 
}
window.addEventListener('resize', updateRegistrationVisibility);


//desktop versian api
let renderCountry = function (data, className = "") {
    let html = `
    <div class='containerSHoplist'>
      <div class="cont1">
        <img class="mainImg" src="${data.images[0]}" alt="">
        <div class="contInformation">
          <p class="lorem">${data.category}</p>
          <h1 class="loremname">${data.title}</h1>
          <p class="loremdesription">${data.description}</p>
        </div>
      </div>
    </div>`;
    document.querySelector('.fullCont').insertAdjacentHTML('beforeend', html);
}

  let limit = 10;
  let skip = 0;
  
  function clearContent() {
    const fullCont = document.querySelector('.fullCont');
    fullCont.innerHTML = '';
  }
  
  function fetchDataAndRender() {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(response => response.json())
      .then(res => {
        clearContent(); 
        res.products.forEach(element => {
          renderCountry(element);
        });
        
        let loremname = document.querySelectorAll('.loremname')
        let modalwindowInformationName = document.querySelector('.modalwindowInformationName');
        let modalwindowInformationDestription = document.querySelector('.modalwindowInformationDestription')
        let modalwindowInformationImg = document.querySelector('.modalwindowInformationImg')
        loremname.forEach(item => {
          item.addEventListener('click', function(){
            let index = Array.from(loremname).indexOf(item)

            if(index >= 0 && index < res.products.length){
              modalwindowInformationName.textContent = res.products[index].title;
              modalwindowInformationDestription.textContent = res.products[index].description;
              modalwindowInformationImg.src = res.products[index].images[0];
              modalwindow.style.display = 'block';
            }
          })
        })



      });
  }
  let modalwindowClosw = document.querySelector('.modalwindowClosw');
  modalwindowClosw.addEventListener('click', function(){
    modalwindow.style.display = 'none'
  })
  fetchDataAndRender();
/////////////////////////////////////////////////////////////////////
  
  
  
  
  

  
  
  
  
  
  
  //header burder-menu
  let header_barMenu = document.querySelector('.header_barMenu');
  let navigationBarList = document.querySelector('.navigationBarList');
  header_barMenu.addEventListener('click', function(){
      navigationBarList.style.display = 'block';
  })
  
  
  let navBarClose = document.querySelector('.navBarClose')
  navBarClose.addEventListener('click', function(){
    navigationBarList.style.display = 'none';
  })
/////////////////////////////////////////////////
  
  
  
//previev card
  let nextr = document.querySelector('.next');
  let cio = 0; 
  nextr.addEventListener('click', function () {

    skip += limit; 
    fetchDataAndRender(); 
  
    let prewitem = document.querySelectorAll('.number');
  
    if (cio >= 0 && cio < prewitem.length) {
      prewitem[cio].style.backgroundColor = ''; 
      prewitem[cio].style.color = ''; 
    }
  
    cio += 1;
  
    if (cio < prewitem.length) {
      prewitem[cio].style.backgroundColor = '#4F46E5';
      prewitem[cio].style.color = '#FDFDFD';
    }
  });

  let mainitem = document.querySelector('.mainitem');
  mainitem.addEventListener('click', function(){
    skip -= limit; 
    fetchDataAndRender();
  
  })
///////////////////////////////


//lates New tablet-api
let renderCountrytabletMidle = function (dataTablet, className = "") {
    let html = `
      <div class='containerSHoplist'>
        <div class="cont1">
          <img class="mainImg" src="${dataTablet.images[0]}" alt="">
          <div class="contInformation">
            <p class="lorem">${dataTablet.category}</p>
            <h1 class="loremname">${dataTablet.title}</h1>
            <p class="loremdesription">${dataTablet.description}</p>
          </div>
        </div>
      </div>
    `;
    document.querySelector('.fullcontTablet').insertAdjacentHTML('beforeend', html);
  }
  let limitTablet = 4; 
  let skipTablet = 0; 
  
  function clearContentTablet() {
    let fullcontTablet = document.querySelector('.fullcontTablet')
    fullcontTablet.innerHTML = '';
  }
  
  function fetchDataAndRenderTablet() {
    fetch(`https://dummyjson.com/products?limit=${limitTablet}&skip=${skipTablet}`)
      .then(_r1esponse => _r1esponse.json())
      .then(_res => {
        clearContentTablet(); 
        _res.products.forEach(elementss => {
          renderCountrytabletMidle(elementss);
        });
      });
  }

  let tabletlatesnweApiReadMore1True = true;
  let tabletlatesnweApiReadMore1 = document.querySelector('.tabletlatesnweApiReadMore1');
  tabletlatesnweApiReadMore1.addEventListener('click', function () {
    if (tabletlatesnweApiReadMore1True) {
      limitTablet += 4; 
      fetchDataAndRenderTablet();
      tabletlatesnweApiReadMore1.textContent = 'Less';
      tabletlatesnweApiReadMore1True = false;
    } else {
      limitTablet -= 4; 
      fetchDataAndRenderTablet();
      tabletlatesnweApiReadMore1.textContent = 'Read More';
      tabletlatesnweApiReadMore1True = true;
    }
});
fetchDataAndRenderTablet()
///////////////////////////////////////////////////////////////////


//most-popular tablet-version
let renderCountrytabletPopular = function (dataTabletpopular, className = "") {
  let html = `
    <div class='containerSHoplist'>
      <div class="cont1">
        <img class="mainImg" src="${dataTabletpopular.images[0]}" alt="">
        <div class="contInformation">
          <p class="lorem">${dataTabletpopular.category}</p>
          <h1 class="loremname">${dataTabletpopular.title}</h1>
          <p class="loremdesription">${dataTabletpopular.description}</p>
        </div>
      </div>
    </div>
  `;
  document.querySelector('.fullcontTabletpopular').insertAdjacentHTML('beforeend', html);
}

let limitTabletpopular = 3; 
let skipTabletpopular = 10; 

function clearContentTabletpopular() {
  let fullcontTabletpopular = document.querySelector('.fullcontTabletpopular')
  fullcontTabletpopular.innerHTML = '';
}

function fetchDataAndRenderTabletpopular() {
  fetch(`https://dummyjson.com/products?limit=${limitTabletpopular}&skip=${skipTabletpopular}`)
    .then(_r2esponse => _r2esponse.json())
    .then(_res2 => {
      clearContentTabletpopular(); 
      _res2.products.forEach(elementssss => {
        renderCountrytabletPopular(elementssss);
      });
    });
}
fetchDataAndRenderTabletpopular()




let tabletlatesnweApiReadMore2True = true;
let tabletlatesnweApiReadMore2 = document.querySelector('.tabletlatesnweApiReadMore2');
tabletlatesnweApiReadMore2.addEventListener('click', function(){
  if(tabletlatesnweApiReadMore2True){
    limitTabletpopular = limitTabletpopular+3;
    fetchDataAndRenderTabletpopular()
    tabletlatesnweApiReadMore2.textContent = 'less'
    tabletlatesnweApiReadMore2True = false;
  } else {
    limitTabletpopular = limitTabletpopular-3;
    fetchDataAndRenderTabletpopular()
    tabletlatesnweApiReadMore2.textContent = 'Read more'
    tabletlatesnweApiReadMore2True = true;
  }
})
/////////////////////////////////////////