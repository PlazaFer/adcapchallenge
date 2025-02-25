const cutString = (text?: string, characters: number = 15) => {
  if (!text || text === "") return text;
  if (text.length <= characters) return text;
  return `${text.substring(0, characters)}...`;
};

export const Strings = {
  cutString,
};
