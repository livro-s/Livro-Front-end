import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/hooks/useStores';
import MyInfo from 'components/MyInfo/MyInfo';

const MyPageContainer = observer(() => {
    const [bookData, setbookData] = useState([]);
    const { store } = useStores();
    const { handleBookList } = store.MyPageStore;

    
    const requestMyBooks = useCallback( async () => {
        await handleBookList()
        .then((response) => {
            console.log(response);
            setbookData(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [handleBookList]);

    useEffect(() => {
        requestMyBooks();
    }, [requestMyBooks]);
    
    return (
        <MyInfo bookData={bookData} setbookData={setbookData}/>
    );
})

export default MyPageContainer;
