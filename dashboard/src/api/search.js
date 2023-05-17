export async function searchAPI(searchText) {
  const response = await fetch(`http://127.0.0.1:3001/api/products=${searchText}`);
  const result = await response.json();
  if (result.Search) {
    return result.Search;
  } else {
    return [];
  }
}
