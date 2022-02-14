
const products= document.querySelectorAll('.card');
console.log(products);
const prev= document.querySelector('.prev');
const next= document.querySelector('.next'); 
var maxItem=9;
let index=1;
const pagination = Math.ceil(products.length/maxItem);

prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
})

next.addEventListener("click",function(){
    index++;
    check();
    showItems();
})

function check(){
    if(index==pagination){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");
    }

    if(index==1){
        prev.classList.add("disabled");
    }
    else{
        prev.classList.remove("disabled");
    }
}

function showItems(){
     for(var i=0;i<products.length;i++){
        products[i].classList.remove("show");
        products[i].classList.add("hide");
     
        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            products[i].classList.remove("hide");
            products[i].classList.add("show");
        }
    } 
}

window.onload=function(){
    showItems();
    check();
    
}



// Browse Options
const categories= document.querySelectorAll('.category');
const toggleBtns= document.querySelectorAll('.toggle');

categories.forEach((category)=> {
    toggleBtns.forEach((toggle)=> {
        toggle.addEventListener('click', ()=> {
            toggle.classList.toggle('active');
            category.classList.toggle('active');
        });
    });
});

// Sliding Header
$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $("header").addClass("slide");
    } else {
        $("header").removeClass("slide");
    }
});

// Mobile menu
const menu= document.querySelector('.mobile-menu');

menu.addEventListener('click', ()=> {
    $("nav").toggleClass("active");
});

// Pagination for mobile


// const maxProducts= 3;
// let index= 1;


// prev.addEventListener("click",function(){
//     index--;
//     showItems();
// })

// next.addEventListener("click",function(){
//     index++;
//     showItems();
// })


// const pagination= Math.ceil(products.length / maxProducts);

// function showItems() {
//     for(let i=0; i < products.length; i++) {
//         products[i].classList.remove('show');
//         products[i].classList.add('hide');

//         if (i >= (index * maxProducts) - maxProducts && i < index * maxProducts) {
//             products[i].classList.remove('hide');
//             products[i].classList.add('show');
//         };
//     };
// };