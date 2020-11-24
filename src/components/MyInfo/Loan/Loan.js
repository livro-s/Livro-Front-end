import React from 'react';
import './Loan.scss';

const Loan = ({ isLoaned }) => {
    return (
        <div className="myPage-loan">
            {isLoaned ? (
                <>
                    <div className="myPage-loan-book">대출한</div>
                    <div className="myPage-loan-book">도서가</div>  
                    <div className="myPage-loan-book">없어요</div>
                {/*대출한 도서가 있는 경우 Mapping 예정 */}
                </>
            ) : (
                <>
                    <div className="myPage-loan-book">대출한</div>
                    <div className="myPage-loan-book">도서가</div>  
                    <div className="myPage-loan-book">있어요</div>
                </>
            )}
        </div>
    )
}

export default Loan;