export const getMovieFromCache = (id) => {
  const cache = JSON.parse(localStorage.getItem("movieCache")) || {};
  return cache[id];
};

export const saveMovieToCache = (id, data) => {
  const cache = JSON.parse(localStorage.getItem("movieCache")) || {};
  cache[id] = data;
  localStorage.setItem("movieCache", JSON.stringify(cache));
};
