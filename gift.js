var target = document.getElementById("target");
var present = document.getElementById("present");
var logo = document.getElementById("logo");
var copying = document.getElementById("copying");

function logoTouch() {
  logo.style.animationName = "logo";
  logo.addEventListener("animationend", copyingST);
}

function copyingST() {
  logo.style.display = "none";
  copying.style.display = "block";
  copying.addEventListener("animationend", copyingEND);
}

function copyingEND() {
    copying.style.display = "block";
    copying.style.opacity= "1";
}

switch (window.location.hash) {
  case "#0":
    console.log("小晉");
    target.textContent = "小晉";
    present.textContent = "他喜歡驚喜，給他一個最適合他的禮物吧";
    break;
  case "#1":
    console.log("椀愉");
    target.textContent = "椀愉";
    present.innerHTML =
      "她不喜歡驚喜，直接送她她想要的<a href='https://loveiizakka.com/product/95f45177-2e65-4b97-94cf-e52341071d2b?variant=409d152c-4a0c-46aa-87f7-644a349fd83b'>禮物</a> 吧!<br> 她要的顏色是星空銀";
    break;
  case "#2":
    console.log("Sam");
    target.textContent = "Sam";
    present.textContent = "他喜歡驚喜，給他一個最適合他的禮物吧";
    break;
  case "#3":
    console.log("小路");
    target.textContent = "小路";
    present.textContent = "他喜歡驚喜，給他一個最適合他的禮物吧";
    break;
  case "#4":
    console.log("羊頭");
    target.textContent = "羊頭";
    present.textContent = "她不喜歡符咒，請不要送她符咒";
    break;
  case "#5":
    console.log("彭");
    target.textContent = "彭";
    present.textContent = "她不吃肉，請不要送她肉類製品";
    break;
  case "#6":
    console.log("恩多");
    target.textContent = "恩多";
    present.textContent = "他喜歡驚喜，給他一個最適合他的禮物吧";
    break;
  case "#7":
    console.log("小R");
    target.textContent = "小R";
    present.textContent = "她不喜歡酒，請不要送她酒";
    break;

  default:
    break;
}
