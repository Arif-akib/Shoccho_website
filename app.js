// navbar part
let dpList=document.getElementById('dp');
let ham=document.getElementById('ham');
ham.onclick=function(){
    console.log('x');
    if(dp.classList == 'dp'){
        dp.classList = 'dp-active';
      }
      else{
        dp.classList = 'dp';
      }
    };
    document.addEventListener('click', function outside(event) {
        const dp = document.getElementById('dp');
        const ham=document.getElementById('ham');
        // console.log("x")
        if (!ham.contains(event.target)) {
          dp.classList = 'dp';
        }
      });
// navbar part

// accordion start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accor-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};

// accordion end

$(document).ready(function() {
  $("#formSubmit").validate({
      rules: {
      pNum: {
      number: true,
      maxlength: 11,
      }
    }
  });
});


window.addEventListener('scroll',reveal);
function reveal(){
  let reveals =document.querySelectorAll('.reveal');
  for (var r = 0; r<reveals.length;r++){

    var windowheight=window.innerHeight;
    var revealtop=reveals[r].getBoundingClientRect().top;
    var revealpoint =0;

    if(revealtop < windowheight - revealpoint){
      reveals[r].classList.add('r-active');
    }
    else{
      reveals[r].classList.remove('r-active');
    }
  };
}


// pricing portion start

// let priceMonth=document.getElementById("price-month");
// let priceYear=document.getElementById("price-year");
// let btnMove=document.getElementById("btn-move");
// let cards = document.getElementsByClassName("card-group");
// priceMonth.onclick = function(){
//     console.log("x");
//     btnMove.style.transform="translateX(-60%)";
//     // move.style.background="black";
//     btnMove.innerHTML="Month";
//     priceYear.style.transform="translateX(-10px)";
//     for(el of cards){
//         el.style.transform = "rotateY(360deg)"
//     }
// };
// priceYear.onclick = function(){
//     let cards = document.getElementsByClassName("card-group");
//     console.log(cards);
//     btnMove.style.transform="translateX(40%)";
//     // move.style.background="black";
//     btnMove.innerHTML="Year";
//     priceMonth.style.transform="translateX(10px)";
//     for(el of cards){
//         el.style.transform = "rotateY(180deg)"
//     }
// };

// pricing portion end