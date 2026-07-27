// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];

  // Örugg setning á categories (athugar hvort fylkið sé til áður en .length er lesið)
  if (Array.isArray(currentItem?.data?.categories)) {
    categories = currentItem.data.categories;
  }

  // Örugg setning á tags
  if (Array.isArray(currentItem?.data?.tags)) {
    tags = currentItem.data.tags;
  }

  // filter by categories (örugg athugun á öllum póstum)
  const filterByCategories = allItems.filter(
    (item: any) =>
      Array.isArray(item?.data?.categories) &&
      categories.some((category) => item.data.categories.includes(category))
  );

  // filter by tags (örugg athugun á öllum póstum)
  const filterByTags = allItems.filter((item: any) =>
    Array.isArray(item?.data?.tags) &&
    tags.some((tag) => item.data.tags.includes(tag))
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug (fjarlegir núverandi uppskrift svo hún mæli ekki með sjálfri sér)
  const filterBySlug = mergedItems.filter((product: any) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;