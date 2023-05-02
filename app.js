// navbar part
let dropDown=document.getElementById('dp');
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