let barIcon = document.querySelector(".bar-icon")
let closeIcon = document.querySelector(".close-icon")
let menu = document.querySelector(".menu")


barIcon.addEventListener('click',function(){
    menu.classList.add('is-active'),
    barIcon.classList.add('is-active'),
    closeIcon.classList.add('is-active')
});

closeIcon.addEventListener('click',function(){
    menu.classList.remove('is-active'),
    barIcon.classList.remove('is-active'),
    closeIcon.classList.remove('is-active')
});




// side pictures
var picture1 = document.querySelector('#pic1');
var picture2 = document.querySelector('#pic2');
var picture3 = document.querySelector('#pic3');


 // Main picture container
 var mainContainer = document.querySelector('#picture');
 var mainContainer2 = document.querySelector('#picture2');
 var mainContainer3 = document.querySelector('#picture3');


 // selector
 var rect = document.querySelector("#rect");
 var rect2 = document.querySelector("#rect2");
 var rect3 = document.querySelector("#rect3");

 let drug = document.getElementById("drug-content");
 let tea = document.getElementById("tea-content");
 let wheat = document.getElementById("wheat-content");



   // Zoom window
   var zoom = document.querySelector('#zoom');
   var zoom2 = document.querySelector('#zoom2');
   var zoom3 = document.querySelector('#zoom3');

   // list of pictures 
   picList = [picture1,picture2,picture3]

   // Active side picture
   let picActive = 1;

   // change image 
   function changeImage(imgSrc, n) {
   
    // This will change the background image of the zoom window
    zoom.style.backgroundImage = "url(" + imgSrc + ")";
    zoom2.style.backgroundImage = "url(" + imgSrc + ")";
    zoom3.style.backgroundImage = "url(" + imgSrc + ")";
}


            // Width and height of main picture in px
            let w1 = mainContainer.offsetWidth ;
            let h1 = mainContainer.offsetHeight;

            let j1 = mainContainer2.offsetWidth;
            let k1 = mainContainer2.offsetHeight;

            
            let p1 = mainContainer2.offsetWidth;
            let q1 = mainContainer2.offsetHeight;

         

            // Zoom ratio
            let ratio = 3;

            // Zoom window background-image size
            zoom.style.backgroundSize = w1 * ratio + 'px ' + h1 * ratio + 'px';
            zoom2.style.backgroundSize = j1 * ratio + 'px ' + k1 * ratio + 'px';
            zoom3.style.backgroundSize = p1 * ratio + 'px ' + q1 * ratio + 'px';

            // Coordinates of mouse cursor
            let x, y, xx, yy;

            // Width and height of selector
            let w2 = rect.offsetWidth;
            let h2 = rect.offsetHeight;

            let j2 = rect2.offsetWidth;
            let k2 = rect2.offsetHeight;

            let p2 = rect3.offsetWidth;
            let q2 = rect3.offsetHeight;

            // zoom window width and height
            zoom.style.width = w2 * ratio + 'px';
            zoom.style.height = h2 * ratio + 'px';

            zoom2.style.width = j2 * ratio + 'px';
            zoom2.style.height = k2 * ratio + 'px';

            zoom3.style.width = p2 * ratio + 'px';
            zoom3.style.height = q2 * ratio + 'px';

            // half of selector shows outside the main picture
            // We need half of width and height
            w2 = w2/2;
            h2 = h2/2;

            j2 = j2/2;
            k2 = k2/2;

            p2 = p2/2;
            q2 = q2/2;
            
            // moving the selector box 
            function move(event) {
                // How far is the mouse cursor from an element
                // x how far the cursor from left of element
                x = event.offsetX;
                // y how far the cursor from the top of an element
                y = event.offsetY;

                xx = x - w2;
                yy = y - h2;

                xx = x - j2;
                yy = y - k2;

                xx = x - p2;
                yy = y - q2;
                // Keeping the selector inside the main picture
                // left of picture
                if (x < w2) {
                    x = w2;
                    // matching the zoom window with the selector
                    xx = 0;
                }
                if (x < j2) {
                    x = j2;
                    xx = 0;
                }
                if (x < p2) {
                    x = p2;
                    xx = 0;
                }
                // right of main picture
                if (x > w1 - w2) {
                    x = w1 - w2; 
                    xx = x - w2;
                }
                if (x > j1 - j2) {
                    x = j1 - j2; 
                    xx = x - j2;
                }
                if (x > p1 - p2) {
                    x = p1 - p2; 
                    xx = x - p2;
                }
                // top of main picture 
                if (y < h2) {
                    y = h2;
                    yy = 0;
                } 
                if (y < k2) {
                    y = k2;
                    yy = 0;
                } 
                if (y < q2) {
                    y = q2;
                    yy = 0;
                } 
                // bottom of main picture
                if (y > h1 - h2) {
                    y = h1 - h2;
                }
                if (y > k1 - k2) {
                    y = k1 - k2;
                }
                if (y > q1 - q2) {
                    y = q1 - q2;
                }


                xx = xx * ratio;
                yy = yy * ratio;
                // changing the position of the selector
                rect.style.left = x + 'px';
                rect.style.top = y + 'px';
                rect2.style.left = x + 'px';
                rect2.style.top = y + 'px';
                rect3.style.left = x + 'px';
                rect3.style.top = y + 'px';
                // changing background image of zoom window
                zoom.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px'; 
                zoom2.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px';  
                zoom3.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px';  

            }

 mainContainer.addEventListener('mousemove', function(){
    move(event);
    addOpacity();
})

mainContainer2.addEventListener('mousemove', function(){
    move(event);
    addOpacity2();
})

mainContainer3.addEventListener('mousemove', function(){
    move(event);
    addOpacity3();
})



// show selector
// show zoom window
function addOpacity() {
    rect.classList.add('rect-active'); 
    zoom.classList.add('zoom-active');
    drug.classList.add('drug-active');
}
function addOpacity2() {
    rect2.classList.add('rect-active'); 
    zoom2.classList.add('zoom-active');
    tea.classList.add('tea-active');
}
function addOpacity3() {
    rect3.classList.add('rect-active'); 
    zoom3.classList.add('zoom-active');
    wheat.classList.add('wheat-active');
}

// Hide the zoom window 
function removeOpacity() {
    rect.classList.remove('rect-active');
    rect2.classList.remove('rect-active');
    rect3.classList.remove('rect-active');
    zoom.classList.remove('zoom-active');
    zoom2.classList.remove('zoom-active');
    zoom3.classList.remove('zoom-active');

    drug.classList.remove('drug-active');
    tea.classList.remove('tea-active');
    wheat.classList.remove('wheat-active');
}

mainContainer.addEventListener('mouseout', function() {
    removeOpacity(); 
})
mainContainer2.addEventListener('mouseout', function() {
    removeOpacity(); 
})
mainContainer3.addEventListener('mouseout', function() {
    removeOpacity(); 
})







