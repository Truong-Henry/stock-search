const dataFetcher = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data2", data);
    return data;
  } catch (error) {
    console.error("error", error);
  }
};

export default dataFetcher;
