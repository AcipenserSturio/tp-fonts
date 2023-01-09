function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}


export default function Bundle() {
  const bundle_url = "https://linku.la/jasima/data.json";
  console.log("Fetching dictionary data...")
  const bundle = JSON.parse(Get(bundle_url));
  console.log("Dictionary data fetched.");
  return bundle;
}
