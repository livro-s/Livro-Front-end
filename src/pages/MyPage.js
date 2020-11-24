import React from 'react';
import PageTemplate from 'components/Common/PageTemplate/PageTemplate';
import MyInfo from 'components/MyInfo/MyInfo';
import MyPageContainer from 'container/MyPageContainer/MyPageContainer';

const MyPage = () => {
    return (
        <PageTemplate>
            <MyPageContainer/>
        </PageTemplate>
    );
}

export default MyPage;