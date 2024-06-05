function change() {
  a = Math.random();
  return a;
}

function setsec() {
  sec = 29;
}

async function Timer() {
  timer = setInterval(function () {
    document.getElementById("Timer").innerText = "00:" + sec;
    console.log(sec);
    sec--;
    if (sec == 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function stop() {
  setTimeout(function () {
    clearInterval(timer);
    document.getElementById("circle").removeEventListener("click", next);
    reload();
    start();
  }, 30000);
}

function next() {
  count = count + 1;
  if (hs < count) {
    hs++;
  }
  // c[0].style.top = mh * change() * 0.080 + "%";
  // c[0].style.left = mw * change() * 0.080 + "%";
  c[0].style.top = change() *90  + "%";
  c[0].style.left = change() * 90 + "%";

  document.getElementById("score").innerText = "Score = " + count;
}

function start() {
  q = document.getElementById("start_button");
  q.addEventListener("click", game);
  q.addEventListener("click", stop);
  q.addEventListener("click", () => {
    document.getElementById("score").innerText = "Score = " + count;
  });
}

function game() {
  element = document.getElementById("start_button");
  element.remove();

  bt = document.createElement("div");
  bt.className = "Timer";
  //or
  bt.id = "Timer";

  element = document.getElementById("score");
  element.before(bt);

  document.getElementById("circle").addEventListener("click", next);
  sec = 29;
  (() => {
    Timer();
  })();
}

function reload() {
  document.getElementById("highscore").innerText = "High Score = " + hs;
  count = 0;

  done();

  // c[0].style.top = mh * change() * 0.080 + "%";
  // c[0].style.left = mw * change() * 0.080 + "%";
  c[0].style.top = change() * 90  + "%";
  c[0].style.left = change() * 90 + "%";
}


function done() {
  return new Promise((resolve, reject) => {
    element = document.getElementById("Timer");
    element.remove();

    bt = document.createElement("button");
    bt.className = "start_button";
    bt.id = "start_button";
    bt.innerHTML = "Start";

    element = document.getElementById("score");
    element.before(bt);
    resolve();
  });
}





ht = document.querySelector(".playbox");
// let mh = ht.offsetHeight;
// let mw = ht.offsetWidth;

c = document.getElementsByClassName("circle");

let count = 0;
let hs = 0;
cval=0;




reload();

start();


let mouseX = 0, mouseY = 0;
let isMouseMoving = false;

// Throttle interval in milliseconds

// let throttleTimeout = null;
// const throttleInterval = 500; 


ht.addEventListener("mousemove", (event) => {

  //use this for custom cursor like (img, icon etc)
  // const mouseX = event.clientX - cursor.clientWidth/2;
  // const mouseY = event.clientY - cursor.clientHeight/2;
  mouseX = event.clientX;
  mouseY = event.clientY;
  isMouseMoving = true;
  
  //throttle mousemove event

//   if (!throttleTimeout) {
//     throttleTimeout = setTimeout(() => {
//       //add isMouseMoving condition here to throttle mousemove event
//       throttleTimeout = null;
//     }, throttleInterval);
//   }
});

function updateCursor() {
  if (isMouseMoving) {
    custom_cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    isMouseMoving = false;
  }
  requestAnimationFrame(updateCursor); // Continue the animation loop for the next frame 
}

requestAnimationFrame(updateCursor);


custom_cursor = document.querySelector(".custom_cursor");
body= document.querySelector("body");
cursor_btn = document.querySelector(".cursor_btn");


ht.addEventListener("mouseenter", (event) => {
  if (cval == 0) {
  custom_cursor.style.display = "block";
  body.style.cursor = "none";
}
});
ht.addEventListener("mouseleave", (event) => {
  if (cval == 0) {
    
    custom_cursor.style.display = "none";
    body.style.cursor = "auto";
  }
});

cursor_btn.addEventListener("click", (event) => {
  
  if (cval == 1) {
    custom_cursor.style.display = "block";
    body.style.cursor = "none";
    ht.style.cursor = "none";
    cursor_btn.innerText = "+";
    cval = 0;
    return;
  } 
  if (cval == 0) {
    custom_cursor.style.display = "none";
    body.style.cursor = "auto";
    ht.style.cursor = "crosshair";
    cursor_btn.innerHTML = "&middot;";
  cval = 1;
  return;
  }
});
