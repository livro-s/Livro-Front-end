import React from 'react';
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

const MyInfo = () => {

    const isLoan = ( length ) => {
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
                        <Profile/>
                    <div className="myPage-search">
                        {!isLoan(bookDummyData.length) ? <MySearch isLoaned={true}/>: <MySearch isLoaned={false}/>}
                    </div>
                </div>
                {!isLoan(bookDummyData.length) ? <Loan isLoaned={true} bookdata={bookDummyData}/>: <Loan isLoaned={false} bookdata={bookDummyData}/>}
            </div>
        </div>
    )
}

export default MyInfo;