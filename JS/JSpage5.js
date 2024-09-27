let size = document.getElementById('size');


size.onclick = function (event) {
    let target = event.target;
    if (!event.target.classList.contains('size-kind')) return;
    span.background = 'black'
    // imgsrc(target);
};


//  function imgsrc(image){

//         if (image.src.indexOf("gray-like.png")>0){

//                image.src="images/red-like.png"
//         }else{
//                image.src="images/gray-like.png"
//         }

// };