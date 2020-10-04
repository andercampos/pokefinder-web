const getPokemonId = (url: string): number => {
  const splitedUrl = url.split('/');

  return Number(splitedUrl[6]);
};

export default getPokemonId;
