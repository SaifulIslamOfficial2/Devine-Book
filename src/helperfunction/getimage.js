function getImages(uel) {
    return new URL(uel, import.meta.url).href;
  }
  export { getImages };
  