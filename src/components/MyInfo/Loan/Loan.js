import { Bookmark } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
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

    useEffect(() => {

    })

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
            ) : bookdata.book && bookdata.book.map((book, key) => {
                let a = returnDay(book.returnDate);

                return (
                    <div className="myPage-loan-book-wrapper" key={key}>
                        <img src={book.image} alt="책" className="myPage-loan-book-image"/>
                        <div className="myPage-loan-book">
                            <div className="myPage-loan-book-title">{book.title}</div>
                            <div className="myPage-loan-book-subtitle">대출일자 : {book.loanDate}</div>
                            <div className="myPage-loan-book-subtitle">반납기간 : {book.returnDate}</div>
                            <div className="myPage-loan-book-subtitle">위치 : {book.location}</div>               
                        </div>
                        <div className="myPage-loan-book-return">{a < 0 ? null : '반납까지' }<br/><span className={a < 0 ? 'myPage-loan-book-return-delay' : 'myPage-loan-book-return-span'}>{a < 0 ? '연체' : 'D-' + a }</span></div>
                    </div>
                ) 
            }
                    )
                }
        </div>
    )
}

export default Loan;