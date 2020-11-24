import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/hooks/useStores';
import SearchBook from 'components/SearchBook';

const SearchContainer = observer(() => {
  const { store } = useStores();
  const { handleSearchBooks } = store.SearchStore;

  const [keyword, setKeyword] = useState('');

  const requestSearchBooks = useCallback(async () => {
    await handleSearchBooks(keyword)
    .then((response) => {
      console.log(response);
    })

    .catch((error) => {
      console.log(error);
    })
  }, [handleSearchBooks, keyword]);

  return (
    <SearchBook
      keyword={keyword}
      setKeyword={setKeyword}
      requestSearchBooks={requestSearchBooks}
    />
  );
});

export default SearchContainer;