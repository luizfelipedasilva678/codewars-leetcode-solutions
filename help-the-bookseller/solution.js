/**
 *
 * @param {string[]} books
 * @param {string[]} categories
 * @returns
 */
function stockList(books, categories) {
  if (!books.length) return "";

  const quantities = new Map();
  const stock = [];

  for (const category of categories) {
    quantities.set(category, 0);
  }

  for (const book of books) {
    const category = book[0];
    const [_, quantity] = book.split(" ");

    if (quantities.has(category)) {
      quantities.set(category, quantities.get(category) + Number(quantity));
    }
  }

  for (const [category, quantity] of quantities) {
    stock.push(`(${category} : ${quantity})`);
  }

  return stock.join(" - ");
}
