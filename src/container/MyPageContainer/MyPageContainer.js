import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/hooks/useStores';
import MyInfo from 'components/MyInfo/MyInfo';

const MyPageContainer = observer(() => {
    const [bookData, setbookData] = useState([]);
    const [User, setUser] = useState([]);
    const { store } = useStores();
    const { handleBookList, handleUser, isLoading } = store.MyPageStore;

    
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

    const requestUser = useCallback( async () => {
        await handleUser()
        .then((response) => {
            console.log(response);
            setUser(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [handleBookList]);


    useEffect(() => {
        requestMyBooks();
        requestUser();
    }, [requestMyBooks, requestUser]);
    
    return (
        <MyInfo
            bookData={bookData}
            setbookData={setbookData}
            User={User}
            setUser={setUser}
            isLoading={isLoading}
        />
    );
})

export default MyPageContainer;
