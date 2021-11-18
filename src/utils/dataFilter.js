const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const every_eight = (arr) => {
  if (!Array.isArray(arr)) return [];
  
  return every_nth(arr, 8);
};

export { every_eight };
