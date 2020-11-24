import React, { useEffect, useState } from 'react';
import './MyInfo.scss';
import Profile from './Profile/Profile';
import Loan from './Loan/Loan';
import MySearch from './MySearch/MySearch';
import Loading from 'components/Common/Loading';
import { getToken } from 'lib/util/Token';
import { WarningToast } from 'lib/Toast';
import { useHistory } from 'react-router-dom';

const MyInfo = ({ bookData, isLoading, setbookData, User, setUser }) => {
    const history = useHistory();
    const isLoan = ( length ) => {
        console.log(length);
        if (length === 0) {
            return false;
        } else {
            return true;
        }
    }

    useEffect(() => {
        if (!getToken()) {
            WarningToast("로그인 후 사용 가능합니다.");
            history.push('/');
            return;
        }
    }, [history]);

    return (
        <div className="myPage">
            {
                isLoading && <Loading />
            }
            <div className="myPage-background"/>
            <div className="myPage-book-wrapper">
                <div className="myPage-profile-search--wrapper">
                        <Profile User={User} setUser={setUser}/>
                        {!isLoan(bookData.book && bookData.book.length) ? <MySearch isLoaned={true} bookdata={bookData} />: <MySearch isLoaned={false} bookdata={bookData} />}
                </div>
                {!isLoan(bookData.book && bookData.book.length) ? <Loan isLoaned={true} bookdata={bookData}/>: <Loan isLoaned={false} bookdata={bookData}/>}
            </div>
        </div>
    )
}

export default MyInfo;