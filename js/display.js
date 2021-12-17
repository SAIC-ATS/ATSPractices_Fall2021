let projects = {
  about : "https://editor.p5js.org/gjohns13-spectacular/full/fhAKFBn-Y",
  yufei : "https://editor.p5js.org/YUFEIXIONG/full/1YzYNEvYp",
  arianna : "https://editor.p5js.org/adelat4/full/qdp5F0p5q",
  kavan : "https://editor.p5js.org/kli17/full/AJnJjm6XQ",
  yazan : "https://editor.p5js.org/yalali/full/FVzXxgzwg",
  matt : "https://editor.p5js.org/mying/full/TCWZvA8e7",
  j : "https://tyruswrites.github.io/Chaos-Garden/",
  ofelia : "https://editor.p5js.org/onunez/full/Ut6tH_vmR",
  yuanyao : "https://editor.p5js.org/yzhu22/full/_bK_1AX8W",
  ben : "https://editor.p5js.org/bmiliu/full/CBuA9hLXx",
  susan : "https://editor.p5js.org/susan_huang/full/avMwz21W8",
  danny : "https://editor.p5js.org/ddowns1/full/FQkf848dt",
  aaron : "https://editor.p5js.org/susan_huang/full/avMwz21W8",
  ryan : "https://editor.p5js.org/Youch/full/GzFXxVfJ6",
  xiaoxuan : "https://editor.p5js.org/xhan12/full/MRsioxKDE",
  aidan: "https://editor.p5js.org/afryli/full/smEPZhGzk",
  daniel :"https://editor.p5js.org/dtseng/full/ouJnEToIC",
  savannah : "https://editor.p5js.org/savannahbell/full/GjA310eo-",
  xindi : "https://editor.p5js.org/xwu10/full/CL-8ve4nV",
  yuqi: "https://editor.p5js.org/yweng/full/B67N5SHUy",
  jisung : "https://editor.p5js.org/jisung/full/8ueKJIIlu",
  meghan : "https://editor.p5js.org/meghanr/full/KXvvbgg74",
  gretchen : "https://editor.p5js.org/gbock/full/fhVx_714W",
  rachel : "https://editor.p5js.org/rirwin/full/kOt9a-iZI",
  anna : "https://editor.p5js.org/avango/full/65CaGbunm",
  fengdanlu : "https://editor.p5js.org/fli4/full/92aYGUVl-",

}



  function loadDoc(name) {
console.log(projects.yazan)

 // let proj = JSON.parse(projects);
 // let projLink =
let link = projects[name];
let iframe = document.getElementById('main-window');
iframe.setAttribute("src", link)
}
