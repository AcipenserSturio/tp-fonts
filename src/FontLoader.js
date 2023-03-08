import './fonts.css';
import FontFaceObserver from 'fontfaceobserver';


export default function all_valid_fonts(fonts) {
  return Object.fromEntries(
    Object.entries(fonts).filter(([key, value]) => is_font_loaded(value))
  )
}

function is_font_loaded(font) {
  let fontname = get_font_name(font);
  let fontface = new FontFaceObserver(fontname);

  fontface.load().then(() => {
    console.log(fontname + ' is available');
    return true;
  }, function () {
    console.log(fontname + ' is not available');
    return false;
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
