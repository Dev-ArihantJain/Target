console.log("hello");

function change() {
  a = Math.random();
  return a;
}

function setsec() {
  sec = 29;
}

async function Timer() {
  // sec=10;
  // function setsec() {sec=10;// }

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
    reload();
    document.getElementById("circle").removeEventListener("click", next);
    start();
  }, 30000);
}





ht = document.querySelector(".playbox");
let mh = ht.offsetHeight;
let mw = ht.offsetWidth;

c = document.getElementsByClassName("circle");

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

let count = 0;
let hs = 0;

function reload() {
  document.getElementById("highscore").innerText = "High Score = " + hs;
  count = 0;

  done();

  // use this instead this don't work..............

  // element=document.getElementById("Timer");
  // element.remove();

  // bt=document.createElement("button");
  // bt.className="start_button"; bt.id="start_button";
  // bt.innerHTML="Start";

  // element=document.getElementById("score");
  // element.before(bt);

  c[0].style.top = mh * change() * 0.9 + "px";
  c[0].style.left = mw * change() * 0.9 + "px";
}

reload();

// document.getElementById("circle").addEventListener("click", function(){count=count+1;});

function next() {
  count = count + 1;
  if (hs < count) {
    hs++;
  }
  c[0].style.top = mh * change() * 0.9 + "px";
  c[0].style.left = mw * change() * 0.9 + "px";
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

start();

function game() {
  element = document.getElementById("start_button");
  element.remove();

  bt = document.createElement("div");
  bt.className = "Timer";
  bt.id = "Timer";

  element = document.getElementById("score");

  element.before(bt);

  document.getElementById("circle").addEventListener("click", next);
  sec = 29;
  (() => {
    Timer();
  })();
}
