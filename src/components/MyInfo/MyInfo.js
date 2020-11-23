import React from 'react';
import Book from 'assets/svg/Book';
import './MyInfo.scss';
import { GoSearch } from 'react-icons/go';

const MyInfo = () => {
    return (
        <div className="myPage">
            <div className="myPage-background"/>
            <div className="myPage-book-wrapper">
                <div className="myPage-profile-search--wrapper">
                    <div className="myPage-profile">
                        <div className="myPage-profile-circle"/>
                        <div className="myPage-profile-number">2학년 1반 11번 신서림</div>
                    </div>
                    <div className="myPage-search">
                        <div className="myPage-search-input-wrapper">
                            <Book/>
                            <input className="myPage-search-input" type="text" placeholder="찾고싶은 도서를 검색해보세요"/>
                            <GoSearch style={{ width: 20, height: 20 }}/>
                        </div>
                        <button className="myPage-search-button">검색</button>
                    </div>
                </div>
                <div className="myPage-loan">
                    <div className="myPage-loan-book">대출한</div>
                    <div className="myPage-loan-book">도서가</div>  
                    <div className="myPage-loan-book">없어요</div>
                    {/*대출한 도서가 있는 경우 Mapping 예정 */}
                </div>
            </div>
        </div>
    )
}

export default MyInfo;