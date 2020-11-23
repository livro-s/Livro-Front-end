import React from 'react';
import './MyInfo.scss';

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

                    </div>
                </div>
                <div className="myPage-loan">

                </div>
            </div>
        </div>
    )
}

export default MyInfo;