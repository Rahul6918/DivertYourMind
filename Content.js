const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #33cc99;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  ._3 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 30px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  .btn{
    background-color: rgb( 255, 255, 255 );
    position: relative;
    display: inline-block;
    width: 358px;
    padding: 5px;
    z-index: 5;
    font-size: 25px;
    margin:0 auto;
    color:#33cc99;
    text-decoration: none;
    margin-right: 10px
}
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
   </style>`;
};

const generateHTML = (pageName) => {
  return `
   
   <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
  <div class='_404'>404</div>
  <hr>
  <div class='_1'>THE PAGE</div>
  <br>
  <div class='_2'>WAS NOT FOUND</div>
  <div class='_3'>Make a Wish List and Chase Youe Dreams</div>
  <br>
  <a class='btn' href='https://www.amazon.in?&linkCode=ll2&tag=rahulroy69109-21&linkId=4f7d9b09d5e1bbefd81c78b533c8fcef&language=en_IN&ref_=as_li_ss_tl'>Wish List</a>
</div>
   `;
};

switch (window.location.hostname) {
  case "www.pornhub.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("pornhubc");
    break;

  case "www.pornhub.org":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("pornhubo");
    break;

  case "www.xvideos.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos");
    break;

  case "www.xvideos2.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos2");
    break;

  case "www.xvideos3.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos3");
    break;

  case "www.xvideos4.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos4");
    break;

  case "www.xvideos5.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos5");
    break;

  case "www.xvideos6.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos6");
    break;

  case "www.xvideos7.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos7");
    break;

  case "www.xvideos8.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos8");
    break;

  case "www.xvideos9.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos9");
    break;

  case "www.xvideos10.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos10");
    break;

  case "www.xvideos11.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos11");
    break;

  case "www.xvideos12.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos12");
    break;

  case "www.xvideos13.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos13");
    break;

  case "www.xvideos14.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos14");
    break;

  case "www.xvideos15.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos15");
    break;

  case "www.xvideos16.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos16");
    break;

  case "www.xvideos17.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos17");
    break;

  case "www.xvideos18.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos18");
    break;

  case "www.xvideos19.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideos19");
    break;

  case "www.xnxx.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("xnxx");
      break;

  case "anyxxx.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("anyxxx");
    break;

  case "www.xvideosplus.net":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("xvideosplus");
    break;
}
