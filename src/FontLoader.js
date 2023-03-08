import './fonts.css';
import FontFaceObserver from 'fontfaceobserver';


export default function all_valid_fonts(fonts) {
  // return Object.fromEntries(
  //   Object.entries(fonts).filter(([key, value]) => is_font_loaded(value))
  // )
  return are_fonts_loaded(fonts);
}

function are_fonts_loaded(fonts) {
  return new Promise((resolve, reject) => {
    let font_loaded_promises = [];
    for (let font of Object.values(fonts)) {
      font_loaded_promises.push(is_font_loaded(font));
    }
    Promise.all(font_loaded_promises).then((fonts) => {
      fonts = fonts.filter(fonts => fonts);
      resolve(fonts);
    });
  });
}

function is_font_loaded(font) {
  return new Promise((resolve, reject) => {

    let fontname = get_font_name(font);
    let fontface = new FontFaceObserver(fontname);

    fontface.load().then(() => {
      console.log(fontname + ' is available');
      resolve(font);
    }, () => {
      console.log(fontname + ' is not available');
      resolve(false);
    });
  });
}

function get_font_name(font) {
  if ("filename" in font) {
    return font["filename"].split(".")[0];
  }
  return false;
}


/*
function loadFonts(fonts) {
  const font = new FontFace("myfont", "url(myfont.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}*/
