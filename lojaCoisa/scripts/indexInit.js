async function init() {
      const produtos = await fetchProdutos();
      const params = new URLSearchParams(window.location.search);
      const initialQuery = params.get('q') || '';
      if (initialQuery) searchInput.value = initialQuery;

      criarProdutos(searchProdutos(produtos, initialQuery));

      const runSearch = debounce(() => {
        criarProdutos(searchProdutos(produtos, searchInput.value));
      }, 150);

      searchInput.addEventListener('input', runSearch);
    }
window.addEventListener("load", init);