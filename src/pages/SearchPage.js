import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import SearchContainer from 'container/SearchContainer';

const SearchPage = () => {
  return (
    <PageTemplate isSearch={false}>
      <SearchContainer />
    </PageTemplate>
  )
}

export default SearchPage;