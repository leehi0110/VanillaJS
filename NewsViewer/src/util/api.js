const API_KEY = process.env.NEWS_API_KEY;

export const request = async (category) => {
  try {
    const res = await fetch(makeQuery(category));

    if (!res.ok) {
      throw new Error("문제발생");
    }

    const parseData = await res.json();

    return parseData.articles;
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};

const makeQuery = (category) => {
  const query = category === "all" ? "" : `&category=${category}`;

  return `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`;
};
