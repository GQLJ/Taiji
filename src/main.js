let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/* 你好，我是高桥凉介
退后，我要开始八(z)卦(b)了 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
  width: 100px;
  height: 100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius: 50%;
  background: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius: 50%;
  background: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);

}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step();