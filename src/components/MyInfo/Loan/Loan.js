import { Bookmark } from '@material-ui/icons';
import React, { useState } from 'react';
import './Loan.scss';

const Loan = ({ isLoaned, bookdata }) => {

    console.log(bookdata.book);
    
    return (
        <div className="myPage-loan">
            {isLoaned ? (
                <>
                    <div className="myPage-loan-none">대출한</div>
                    <div className="myPage-loan-none">도서가</div>  
                    <div className="myPage-loan-none">없어요</div>
                {/*대출한 도서가 있는 경우 Mapping 예정 */}
                </>
            ) : bookdata.book && bookdata.book.map((book, key) => 
                    <div className="myPage-loan-book-wrapper" key={key}>
                        <img src={book.image} alt="책" className="myPage-loan-book-image"/>
                        <div className="myPage-loan-book">
                            <div className="myPage-loan-book-title">{book.title}</div>
                            <div className="myPage-loan-book-subtitle">대출일자 : {book.loanDate}</div>
                            <div className="myPage-loan-book-subtitle">반납기간 : {book.returnDate}</div>
                            <div className="myPage-loan-book-subtitle">위치 : {book.location}</div>               
                        </div>
                        <div className="myPage-loan-book-return">반납까지<br/><span className="myPage-loan-book-return-span">D-7</span></div>
                    </div>
                    )
                }
        </div>
    )
}

export default Loan;