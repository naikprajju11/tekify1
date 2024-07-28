// ----------Scramble------------
$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3000, 20, "alphabet", true);
  });
  
  // ----------scrambleEnd--------------
  
  var tl = gsap.timeline();
  tl.to(".Loading", {
    opacity: 0,
    delay: 2.5,
  })
    .to(".loader", {
      // y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })
    .to(
      ".loader",
      {
        y: "-100%",
        // opacity:0,
        duration: 1,
        // ease: "Expo.easeInOut"
      },
      "up"
    )
    .to(
      ".svgwaala",
      {
        opacity: 1,
        delay: -1.7,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#dotted",
      {
        opacity: 1,
        delay: -1.8,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#donut",
      {
        opacity: 1,
        scale: 2,
        delay: -1.4,
        ease: "Expo.easeInOut",
        rotationY: "+=15",
        duration: 3,
        rotationX: "+=15",
        rotationZ: "+=15",
      },
      "up"
    )
  
    .from(
      "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
      {
        opacity: 0,
        duration: 1,
        scale: 0,
        top: "40%",
        left: "47%",
      },
      "up"
    );
  
  var tl2 = gsap.timeline();
  
  document.querySelectorAll("#explore").forEach(function (elem) {
    elem.addEventListener("click", function () {
      tl2
        .to(
          "#kothik-k",
          {
            left: "-15%",
            top: "-15%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-o",
          {
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-t",
          {
            left: "115%",
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-h",
          {
            left: "115%",
            top: "110%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-i",
          {
            left: "35%",
            top: "120%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-k2",
          {
            left: "-15%",
            top: "80%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to("#donut", {
          width: "80vw",
          top: "-10%",
          rotate: "360deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
          delay: "-1",
        })
        .to(
          "#dotted",
          {
            opacity: 0,
          },
          "sw"
        )
        .to(".svgwaala", {
          opacity: 0,
        });
    });
  });
  
  function example() {
    window.location.href = "captcha.html";
  }
  
  // video 3 --------------
  
  var tl7 = gsap.timeline();
  tl7.from(
    ".main-abhishek",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  );
  tl7
    .from(
      ".front-page-img",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-3",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-1",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 2,
      },
      "anim1"
    )
    .from(
      "#line-effect-2",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    )
    .from(
      ".img-one",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit",
      {
        width: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit-2",
      {
        height: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".main-txt-front",
      {
        opacity: 0,
        ease: "expo.inout",
        delay: -0.5,
        duration: 1,
      },
      "anim2"
    )
    .from(
      "#circle",
      {
        opacity: 0,
        ease: "expo.inout",
        duration: 2,
      },
      "anim2"
    )
    .from(
      "#nav",
      {
        top: -50,
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    );
  
  document
    .querySelector("#cntr-nav .ri-menu-line")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "0%";
      document.querySelector(".upar-menu .ri-close-fill").style.display =
        "initial";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
    });
  
  document
    .querySelector(".upar-menu .ri-close-fill")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "-100%";
      document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
    });
  
  document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
  });
  document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
  });
  document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
  });
  document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
  });
  
  
  // video 3 ----------------------------
  
  
  function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `sequence/video4_000/video4_000.jpg 
sequence/video4_000/video4_001.jpg 
sequence/video4_000/video4_002.jpg 
sequence/video4_000/video4_003.jpg 
sequence/video4_000/video4_004.jpg 
sequence/video4_000/video4_005.jpg 
sequence/video4_000/video4_006.jpg 
sequence/video4_000/video4_007.jpg 
sequence/video4_000/video4_008.jpg 
sequence/video4_000/video4_009.jpg 
sequence/video4_000/video4_010.jpg 
sequence/video4_000/video4_011.jpg 
sequence/video4_000/video4_012.jpg 
sequence/video4_000/video4_013.jpg 
sequence/video4_000/video4_014.jpg 
sequence/video4_000/video4_015.jpg 
sequence/video4_000/video4_016.jpg 
sequence/video4_000/video4_017.jpg 
sequence/video4_000/video4_018.jpg 
sequence/video4_000/video4_019.jpg 
sequence/video4_000/video4_020.jpg 
sequence/video4_000/video4_021.jpg 
sequence/video4_000/video4_022.jpg 
sequence/video4_000/video4_023.jpg 
sequence/video4_000/video4_024.jpg 
sequence/video4_000/video4_025.jpg 
sequence/video4_000/video4_026.jpg 
sequence/video4_000/video4_027.jpg 
sequence/video4_000/video4_028.jpg 
sequence/video4_000/video4_029.jpg
sequence/video3_000/video3_000.jpg 
sequence/video3_000/video3_001.jpg 
sequence/video3_000/video3_002.jpg 
sequence/video3_000/video3_003.jpg 
sequence/video3_000/video3_004.jpg 
sequence/video3_000/video3_005.jpg 
sequence/video3_000/video3_006.jpg 
sequence/video3_000/video3_007.jpg 
sequence/video3_000/video3_008.jpg 
sequence/video3_000/video3_009.jpg 
sequence/video3_000/video3_010.jpg 
sequence/video3_000/video3_011.jpg 
sequence/video3_000/video3_012.jpg 
sequence/video3_000/video3_013.jpg 
sequence/video3_000/video3_014.jpg 
sequence/video3_000/video3_015.jpg 
sequence/video3_000/video3_016.jpg 
sequence/video3_000/video3_017.jpg 
sequence/video3_000/video3_018.jpg 
sequence/video3_000/video3_019.jpg 
sequence/video3_000/video3_020.jpg 
sequence/video3_000/video3_021.jpg 
sequence/video3_000/video3_022.jpg 
sequence/video3_000/video3_023.jpg 
sequence/video3_000/video3_024.jpg 
sequence/video3_000/video3_025.jpg 
sequence/video3_000/video3_026.jpg 
sequence/video3_000/video3_027.jpg 
sequence/video3_000/video3_028.jpg 
sequence/video3_000/video3_029.jpg 
sequence/video3_000/video3_030.jpg 
sequence/video3_000/video3_031.jpg 
sequence/video3_000/video3_032.jpg 
sequence/video3_000/video3_033.jpg 
sequence/video3_000/video3_034.jpg 
sequence/video3_000/video3_035.jpg 
sequence/video3_000/video3_036.jpg 
sequence/video3_000/video3_037.jpg 
sequence/video3_000/video3_038.jpg 
sequence/video3_000/video3_039.jpg 
sequence/video3_000/video3_040.jpg 
sequence/video3_000/video3_041.jpg 
sequence/video3_000/video3_042.jpg 
sequence/video3_000/video3_043.jpg 
sequence/video3_000/video3_044.jpg 
sequence/video3_000/video3_045.jpg 
sequence/video3_000/video3_046.jpg 
sequence/video3_000/video3_047.jpg 
sequence/video3_000/video3_048.jpg 
sequence/video3_000/video3_049.jpg
sequence/video2_000/video2_000.jpg 
sequence/video2_000/video2_001.jpg 
sequence/video2_000/video2_002.jpg 
sequence/video2_000/video2_003.jpg 
sequence/video2_000/video2_004.jpg 
sequence/video2_000/video2_005.jpg 
sequence/video2_000/video2_006.jpg 
sequence/video2_000/video2_007.jpg 
sequence/video2_000/video2_008.jpg 
sequence/video2_000/video2_009.jpg 
sequence/video2_000/video2_010.jpg 
sequence/video2_000/video2_011.jpg 
sequence/video2_000/video2_012.jpg 
sequence/video2_000/video2_013.jpg 
sequence/video2_000/video2_014.jpg 
sequence/video2_000/video2_015.jpg 
sequence/video2_000/video2_016.jpg 
sequence/video2_000/video2_017.jpg 
sequence/video2_000/video2_018.jpg 
sequence/video2_000/video2_019.jpg 
sequence/video2_000/video2_020.jpg 
sequence/video2_000/video2_021.jpg 
sequence/video2_000/video2_022.jpg 
sequence/video2_000/video2_023.jpg 
sequence/video2_000/video2_024.jpg 
sequence/video2_000/video2_025.jpg 
sequence/video2_000/video2_026.jpg 
sequence/video2_000/video2_027.jpg 
sequence/video2_000/video2_028.jpg 
sequence/video2_000/video2_029.jpg 
sequence/video2_000/video2_030.jpg 
sequence/video2_000/video2_031.jpg 
sequence/video2_000/video2_032.jpg 
sequence/video2_000/video2_033.jpg 
sequence/video2_000/video2_034.jpg 
sequence/video2_000/video2_035.jpg 
sequence/video2_000/video2_036.jpg 
sequence/video2_000/video2_037.jpg 
sequence/video2_000/video2_038.jpg 
sequence/video2_000/video2_039.jpg 
sequence/video2_000/video2_040.jpg 
sequence/video2_000/video2_041.jpg 
sequence/video2_000/video2_042.jpg 
sequence/video2_000/video2_043.jpg 
sequence/video2_000/video2_044.jpg 
sequence/video2_000/video2_045.jpg 
sequence/video2_000/video2_046.jpg 
sequence/video2_000/video2_047.jpg 
sequence/video2_000/video2_048.jpg 
sequence/video2_000/video2_049.jpg
sequence/video1_000/video1_003.jpg 
sequence/video1_000/video1_004.jpg 
sequence/video1_000/video1_005.jpg 
sequence/video1_000/video1_006.jpg 
sequence/video1_000/video1_007.jpg 
sequence/video1_000/video1_008.jpg 
sequence/video1_000/video1_009.jpg 
sequence/video1_000/video1_010.jpg 
sequence/video1_000/video1_011.jpg 
sequence/video1_000/video1_012.jpg 
sequence/video1_000/video1_013.jpg 
sequence/video1_000/video1_014.jpg 
sequence/video1_000/video1_015.jpg 
sequence/video1_000/video1_016.jpg 
sequence/video1_000/video1_017.jpg 
sequence/video1_000/video1_018.jpg 
sequence/video1_000/video1_019.jpg 
sequence/video1_000/video1_020.jpg 
sequence/video1_000/video1_021.jpg 
sequence/video1_000/video1_022.jpg 
sequence/video1_000/video1_023.jpg 
sequence/video1_000/video1_024.jpg 
sequence/video1_000/video1_025.jpg 
sequence/video1_000/video1_026.jpg 
sequence/video1_000/video1_027.jpg 
sequence/video1_000/video1_028.jpg 
sequence/video1_000/video1_029.jpg 
sequence/video1_000/video1_030.jpg 
sequence/video1_000/video1_031.jpg 
sequence/video1_000/video1_032.jpg 
sequence/video1_000/video1_033.jpg 
sequence/video1_000/video1_034.jpg 
sequence/video1_000/video1_035.jpg 
sequence/video1_000/video1_036.jpg 
sequence/video1_000/video1_037.jpg 
sequence/video1_000/video1_038.jpg 
sequence/video1_000/video1_039.jpg 
sequence/video1_000/video1_040.jpg 
sequence/video1_000/video1_041.jpg 
sequence/video1_000/video1_042.jpg 
sequence/video1_000/video1_043.jpg 
sequence/video1_000/video1_044.jpg 
sequence/video1_000/video1_045.jpg 
sequence/video1_000/video1_046.jpg 
sequence/video1_000/video1_047.jpg 
sequence/video1_000/video1_048.jpg 
sequence/video1_000/video1_049.jpg
sequence/video6_000/video6_000.jpg 
sequence/video6_000/video6_001.jpg 
sequence/video6_000/video6_002.jpg 
sequence/video6_000/video6_003.jpg 
sequence/video6_000/video6_004.jpg 
sequence/video6_000/video6_005.jpg 
sequence/video6_000/video6_006.jpg 
sequence/video6_000/video6_007.jpg 
sequence/video6_000/video6_008.jpg 
sequence/video6_000/video6_009.jpg 
sequence/video6_000/video6_010.jpg 
sequence/video6_000/video6_011.jpg 
sequence/video6_000/video6_012.jpg 
sequence/video6_000/video6_013.jpg 
sequence/video6_000/video6_014.jpg 
sequence/video6_000/video6_015.jpg 
sequence/video6_000/video6_016.jpg 
sequence/video6_000/video6_017.jpg 
sequence/video6_000/video6_018.jpg 
sequence/video6_000/video6_019.jpg 
sequence/video6_000/video6_020.jpg 
sequence/video6_000/video6_021.jpg 
sequence/video6_000/video6_022.jpg 
sequence/video6_000/video6_023.jpg 
sequence/video6_000/video6_024.jpg 
sequence/video6_000/video6_025.jpg 
sequence/video6_000/video6_026.jpg 
sequence/video6_000/video6_027.jpg 
sequence/video6_000/video6_028.jpg 
sequence/video6_000/video6_029.jpg 
sequence/video6_000/video6_030.jpg 
sequence/video6_000/video6_031.jpg 
sequence/video6_000/video6_032.jpg 
sequence/video6_000/video6_033.jpg 
sequence/video6_000/video6_034.jpg 
sequence/video6_000/video6_035.jpg 
sequence/video6_000/video6_036.jpg 
sequence/video6_000/video6_037.jpg 
sequence/video6_000/video6_038.jpg 
sequence/video6_000/video6_039.jpg 
sequence/video6_000/video6_040.jpg 
sequence/video6_000/video6_041.jpg 
sequence/video6_000/video6_042.jpg 
sequence/video6_000/video6_043.jpg 
sequence/video6_000/video6_044.jpg 
sequence/video6_000/video6_045.jpg 
sequence/video6_000/video6_046.jpg 
sequence/video6_000/video6_047.jpg 
sequence/video6_000/video6_048.jpg 
sequence/video6_000/video6_049.jpg 
sequence/video6_000/video6_050.jpg 
sequence/video6_000/video6_051.jpg 
sequence/video6_000/video6_052.jpg 
sequence/video6_000/video6_053.jpg 
sequence/video6_000/video6_054.jpg 
sequence/video6_000/video6_055.jpg 
sequence/video6_000/video6_056.jpg 
sequence/video6_000/video6_057.jpg 
sequence/video6_000/video6_058.jpg 
sequence/video6_000/video6_059.jpg 
sequence/video6_000/video6_060.jpg 
sequence/video6_000/video6_061.jpg 
sequence/video6_000/video6_062.jpg 
sequence/video6_000/video6_063.jpg 
sequence/video6_000/video6_064.jpg 
sequence/video6_000/video6_065.jpg 
sequence/video6_000/video6_066.jpg 
sequence/video6_000/video6_067.jpg 
sequence/video6_000/video6_068.jpg 
sequence/video6_000/video6_069.jpg 
sequence/video6_000/video6_070.jpg 
sequence/video6_000/video6_071.jpg 
sequence/video6_000/video6_072.jpg 
sequence/video6_000/video6_073.jpg 
sequence/video6_000/video6_074.jpg 
sequence/video6_000/video6_075.jpg 
sequence/video6_000/video6_076.jpg 
sequence/video6_000/video6_077.jpg 
sequence/video6_000/video6_078.jpg 
sequence/video6_000/video6_079.jpg 
sequence/video6_000/video6_080.jpg 
sequence/video6_000/video6_081.jpg 
sequence/video6_000/video6_082.jpg 
sequence/video6_000/video6_083.jpg 
sequence/video6_000/video6_084.jpg 
sequence/video6_000/video6_085.jpg 
sequence/video6_000/video6_086.jpg 
sequence/video6_000/video6_087.jpg 
sequence/video6_000/video6_088.jpg 
sequence/video6_000/video6_089.jpg 
sequence/video6_000/video6_090.jpg 
sequence/video6_000/video6_091.jpg 
sequence/video6_000/video6_092.jpg 
sequence/video6_000/video6_093.jpg 
sequence/video6_000/video6_094.jpg 
sequence/video6_000/video6_095.jpg 
sequence/video6_000/video6_096.jpg 
sequence/video6_000/video6_097.jpg 
sequence/video6_000/video6_098.jpg 
sequence/video6_000/video6_099.jpg 
sequence/video6_000/video6_100.jpg 
sequence/video6_000/video6_101.jpg 
sequence/video6_000/video6_102.jpg 
sequence/video6_000/video6_103.jpg 
sequence/video6_000/video6_104.jpg 
sequence/video6_000/video6_105.jpg 
sequence/video6_000/video6_106.jpg 
sequence/video6_000/video6_107.jpg 
sequence/video6_000/video6_108.jpg 
sequence/video6_000/video6_109.jpg 
sequence/video6_000/video6_110.jpg 
sequence/video6_000/video6_111.jpg 
sequence/video6_000/video6_112.jpg 
sequence/video6_000/video6_113.jpg 
sequence/video6_000/video6_114.jpg 
sequence/video6_000/video6_115.jpg 
sequence/video6_000/video6_116.jpg 
sequence/video6_000/video6_117.jpg 
sequence/video6_000/video6_118.jpg 
sequence/video6_000/video6_119.jpg 
sequence/video7_000/video7_006.jpg 
sequence/video7_000/video7_000.jpg 
sequence/video7_000/video7_001.jpg 
sequence/video7_000/video7_002.jpg 
sequence/video7_000/video7_003.jpg 
sequence/video7_000/video7_004.jpg 
sequence/video7_000/video7_005.jpg


    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 303;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0.8,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"bottom 100%",
        // markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  
  dom()