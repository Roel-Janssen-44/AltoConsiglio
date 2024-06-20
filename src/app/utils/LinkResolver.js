export const linkResolver = (doc) => {
  // if (
  //   doc.type == "page" ||
  //   doc.type == "kunst_page" ||
  //   doc.type == "criminologie_page"
  // ) {
  //   const languageCode = doc.lang.split("-")[0];
  //   const urlWithoutLang = doc.url.replace("/lang:?/", "/");
  //   const newUrl = `/${languageCode}${urlWithoutLang.replace("lang?/", "")}`;
  //   return newUrl;
  // }
  // // lang?
  // if (doc.type === "page") {
  //   const languageCode = doc.lang.split("-")[0];
  //   const urlWithoutLang = doc.url.replace("/lang:?/", "/");
  //   return `/${languageCode}${urlWithoutLang}`;
  // } else if (doc.type === "kunst_page") {
  //   const languageCode = doc.lang.split("-")[0];
  //   const urlWithoutLang = doc.url.replace("/lang:?/", "/");
  //   return `/${languageCode}${urlWithoutLang}`;
  // } else if (doc.type === "criminologie_page") {
  //   const languageCode = doc.lang.split("-")[0];
  //   const urlWithoutLang = doc.url.replace("/lang:?/", "/");
  //   return `/${languageCode}${urlWithoutLang}`;
  // }
  // // } else if (doc.type === "criminologie_page") {
  // //   console.log("doc type == criminologie");
  // //   console.log(doc);
  // //   const languageCode = doc.lang.split("-")[0];
  // //   const urlWithoutLang = doc.url.replace("/lang:?/", "/");
  // //   let newUrl = `/${languageCode}${urlWithoutLang}`;
  // //   console.log("newUrl before");
  // //   console.log(newUrl);
  // //   newUrl = newUrl.substring(0, newUrl.lastIndexOf("/"));

  // //   console.log("newUrl");
  // //   console.log(newUrl);
  // //   return newUrl;
  // // }
  return "/";
};
