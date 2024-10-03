const formatDate = (pubDate) => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(pubDate).toLocaleDateString("en-US", options);
};
const sortPostsByDate = (a, b) => {
  const pubDateA = new Date(a.frontmatter.pubDate);
  const pubDateB = new Date(b.frontmatter.pubDate);
  if (pubDateA < pubDateB) {
    return 1;
  }
  if (pubDateA > pubDateB) {
    return -1;
  }
  return 0;
};

export { formatDate as f, sortPostsByDate as s };
