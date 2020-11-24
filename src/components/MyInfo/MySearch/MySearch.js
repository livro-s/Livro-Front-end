import React from 'react';
import { GoSearch } from 'react-icons/go';
import Book from 'assets/svg/Book';
import './MySearch.scss';

const MySearch = ({ isLoaned }) => {
    return (
        <>
            {isLoaned ? (
                <>
                <div className="myPage-search-input-wrapper">
                    <Book/>
                    <input className="myPage-search-input" type="text" placeholder="찾고싶은 도서를 검색해보세요"/>
                    <GoSearch style={{ width: 20, height: 20 }}/>
                </div>
                <button className="myPage-search-button">검색</button>
                </>
            ) : <div>연체된 도서가 없어요</div>}
        </>
    );
}

export default MySearch;