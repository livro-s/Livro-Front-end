import { Bookmark } from '@material-ui/icons';
import React, { useState } from 'react';
import './Loan.scss';

const Loan = ({ isLoaned, bookdata }) => {
    const [date, setdate] = useState(0);

    const returnDay = (returnDate) => {
        const today = new Date();
        const year = today.getFullYear();   
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const bookReturn = returnDate.split('.');
        const day1 = new Date(year, month, day);
        const day2 = new Date(bookReturn[0], bookReturn[1], bookReturn[2]);
        const diff = day2 - day1;
        const currDay = 24*60*60*1000;
        
        const TestDate = parseInt(diff/currDay);

        return TestDate;
    }

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
                    <div className="myPage-loan-book-wrapper" key={key} onClick={() => setdate(returnDay(book.returnDate))}>
                        <img src={book.image} alt="책" className="myPage-loan-book-image"/>
                        <div className="myPage-loan-book">
                            <div className="myPage-loan-book-title">{book.title}</div>
                            <div className="myPage-loan-book-subtitle">대출일자 : {book.loanDate}</div>
                            <div className="myPage-loan-book-subtitle">반납기간 : {book.returnDate}</div>
                            <div className="myPage-loan-book-subtitle">위치 : {book.location}</div>               
                        </div>
                        <div className="myPage-loan-book-return">반납까지<br/><span className="myPage-loan-book-return-span">{date <= 0 ? '연체' : 'D-' + date }</span></div>
                    </div>
                    )
                }
        </div>
    )
}

export default Loan;