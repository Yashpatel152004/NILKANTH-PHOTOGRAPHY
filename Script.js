  AOS.init({offset:100,duration:500});var swiper=new Swiper(".Img-slider",{slidesPerView:3,spaceBetween:8,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1200:{SlidesPerView:3},2e3:{slidesPerView:4,spaceBetween:50}}});const body=document.querySelector("body"),nav=document.querySelector("nav"),modeToggle=document.querySelector(".dark-light"),searchToggle=document.querySelector(".searchToggle"),sidebarOpen=document.querySelector(".sidebarOpen"),siderbarClose=document.querySelector(".siderbarClose");let getMode=localStorage.getItem("mode");getMode&&"dark-mode"===getMode&&body.classList.add("dark"),modeToggle.addEventListener("click",()=>{modeToggle.classList.toggle("active"),body.classList.toggle("dark"),body.classList.contains("dark")?localStorage.setItem("mode","dark-mode"):localStorage.setItem("mode","light-mode")}),searchToggle.addEventListener("click",()=>{searchToggle.classList.toggle("active")}),sidebarOpen.addEventListener("click",()=>{nav.classList.add("active")}),body.addEventListener("click",e=>{let s=e.target;s.classList.contains("sidebarOpen")||s.classList.contains("menu")||nav.classList.remove("active")});
  function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";} }
    }
