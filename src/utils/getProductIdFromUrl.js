const getProductIdFromUrl = (url) => {
  if (!url || !url.trim()) {
    return null;
  }

  const urlChunks = url.split("-");
  if (!isNaN(urlChunks[0])) {
    return urlChunks[0];
  }

  return null;
};

export default getProductIdFromUrl;
