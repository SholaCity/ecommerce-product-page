

        const nav_icon = document.querySelector('.hamburger');
        const respNav = document.querySelector('.rsp-nav');
        const nav_iconClose = document.querySelector('.closemb-icon');

        nav_icon.addEventListener('click', ()=>{
            console.log('he work');
            respNav.classList.add('mb-active');
        })
        nav_iconClose.addEventListener('click', ()=>{
            respNav.classList.remove('mb-active');
        })
        
        
        
        
        
        
        
        
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // function currentSlide(n) {
        //     showSlides(slideIndex = n);
        // }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if(n > slides.length) {slideIndex = 1}
            if(n < 1) {slideIndex = slides.length}
            for(i = 0;i < slides.length;i++) {
                slides[i].style.display = "none";
            }
           
            slides[slideIndex - 1].style.display = "block";
        }
// image gallery begins

var imgThumbnails = document.querySelectorAll(".img-thumbnail");
const previewImgs = document.querySelectorAll(".main-img");


imgThumbnails.forEach(imgThumbnail => {
    imgThumbnail.addEventListener("click", (e) =>{
        if (e.tagName ="LABEL") {
        
        const activeThumbnail = e.target
        console.log(activeThumbnail);
        const targetPreviewImg = document.querySelector(e.target.dataset.target);
        console.log(targetPreviewImg);
            previewImgs.forEach((previewImg) => {
                previewImg == targetPreviewImg ?previewImg.classList.add("active-preview"):previewImg.classList.remove("active-preview")
                   
            })}
        })
    });


// image gallery ends
// CART FUNCTIONALTY BEGINS

//checkout
const cartWrap = document.querySelector(".cart-info");
const cartIcon = document.querySelector(".cart");
const addToCart = document.querySelector(".add-to-cart");
const cartItemNumber = document.querySelector(".cart-item-number");
const closeCart = document.querySelector(".close-cart");
const  cartItems = document.querySelector(".cart-items .update-product");
const sizeError = document.querySelector(".size-error")
const checkoutBtn = document.querySelector(".checkout-btn");

cartIcon.addEventListener("click", ()=> {
    cartWrap.classList.toggle("active");
})
closeCart.addEventListener("click", ()=> {
    cartWrap.classList.remove("active");
})
function cartFilled() {
    const size = document.querySelector(".sizes input[name='size-buttons']:checked");
    const totalPrice = "$"+125 * count
    if (size == undefined) {
        sizeError.classList.add("active-size-error")
        checkoutBtn.classList.remove("active-cartfill");

    } else {
        sizeError.classList.remove("active-size-error");
        checkoutBtn.classList.add("active-cartfill");
        cartWrap.classList.add("active");

        const newCartEmpty = document.querySelector(".cart-items #empty-cart")

        addToCart.innerHTML= `<img src="./images/icon-cart copy.svg" alt="">Added to Cart`;
        addToCart.disabled= true;
        cartItemNumber.textContent = count
        let newCartFilled = document.createElement("div");
        newCartFilled.innerHTML = ` 
            <div class="products">
                <img src="./images/image-product-1-thumbnail.jpg" alt="">
                <div class="product-details">
                    <p class="name">Fall Limited Edition Sneakers</p>
                    <p class="size">size: ${size.value}</p>
                    <p class="pricing">$125.00 X ${count} <strong class="total-price">${totalPrice}.00</strong></p>
                </div>
                <img src="./images/icon-delete.svg" alt="" class="delete-product" title="delete item">
            </div>`
        if (newCartEmpty) {
            cartItems.replaceChild(newCartFilled ,newCartEmpty);
        } else {
            cartItems.appendChild(newCartFilled); 
        }

        const deleteProduct = document.querySelector(".delete-product");
        cartItems.addEventListener("mouseover",  () => {
       
            deleteProduct.addEventListener("click", (e)=> {
                const parentCartItem = e.target.parentElement.parentElement
                addToCart.disabled= false;
                addToCart.innerHTML= `<img src="./images/icon-cart copy.svg" alt=""> Add to Cart`;

                cartItems.replaceChild(newCartEmpty,parentCartItem);
                checkoutBtn.classList.remove("active-cartfill");
                })
        }) 
    }}

    addToCart.addEventListener("click",()=> {
        cartFilled();
    });

// cart functionalty ends

// ========

const counter = document.querySelector(".counter");
const minusBtn = document.querySelector("#minus-counter");
const plusBtn = document.querySelector("#plus-counter");

var count = 1;
var n = 1

plusBtn.addEventListener("click", ()=> {
    if(count< 12) {
        count++
        console.log(count + "plus");
        minusBtn.classList.remove("disable-count");


    } else if(count=12) {
        plusBtn.classList.add("disable-count");
    } 
    counter.innerHTML =count
    console.log(count);

})
minusBtn.addEventListener("click", ()=> {

    if(count>1) {
        count--
        console.log(count + "minus");
        plusBtn.classList.remove("disable-count");

    } else if (count<2){
        minusBtn.classList.add("disable-count");

        console.log("working minus");
    }

    counter.innerHTML =count
    console.log(count);

})







