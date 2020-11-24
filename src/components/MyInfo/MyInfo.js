import React, { useEffect, useState } from 'react';
import './MyInfo.scss';
import Profile from './Profile/Profile';
import Loan from './Loan/Loan';
import MySearch from './MySearch/MySearch';

const bookDummyData = [
    {
        title: '점프 투 파이썬',
        loanDate:  '2020.08.20',
        returnDate: '2020.08.28',
        location: '005.138 원94ㅂ',
        image: 'http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg'
    },
    {
        title: '아기돼지 삼형제',
        loanDate:  '2020.08.20',
        returnDate: '2020.08.28',
		location: '005.138 원94ㅂ',
        image: 'http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg'
    },
    {
        title: '아기돼지 삼형제',
        loanDate:  '2020.08.20',
        returnDate: '2020.08.28',
		location: '005.138 원94ㅂ',
        image: 'http://image.kyobobook.co.kr/images/book/large/796/l9791188331796.jpg'
    },
]

const MyInfo = ({ bookData, setbookData, User, setUser }) => {

    const isLoan = ( length ) => {
        console.log(length);
        if (length === 0) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <div className="myPage">
            <div className="myPage-background"/>
            <div className="myPage-book-wrapper">
                <div className="myPage-profile-search--wrapper">
                        <Profile User={User} setUser={setUser}/>
                    <div className="myPage-search">
                        {!isLoan(bookData.book && bookData.book.length) ? <MySearch isLoaned={true}/>: <MySearch isLoaned={false}/>}
                    </div>
                </div>
                {!isLoan(bookData.book && bookData.book.length) ? <Loan isLoaned={true} bookdata={bookData}/>: <Loan isLoaned={false} bookdata={bookData}/>}
            </div>
        </div>
    )
}

export default MyInfo;