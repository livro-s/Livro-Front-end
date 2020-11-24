import React from 'react';
import Book from 'assets/svg/Book';
import './MyInfo.scss';
import { GoSearch } from 'react-icons/go';
import Profile from './Profile/Profile';
import Loan from './Loan/Loan';

const MyInfo = () => {
    return (
        <div className="myPage">
            <div className="myPage-background"/>
            <div className="myPage-book-wrapper">
                <div className="myPage-profile-search--wrapper">
                        <Profile/>
                    <div className="myPage-search">
                        <div className="myPage-search-input-wrapper">
                            <Book/>
                            <input className="myPage-search-input" type="text" placeholder="찾고싶은 도서를 검색해보세요"/>
                            <GoSearch style={{ width: 20, height: 20 }}/>
                        </div>
                        <button className="myPage-search-button">검색</button>
                    </div>
                </div>
                <Loan/>
            </div>
        </div>
    )
}

export default MyInfo;