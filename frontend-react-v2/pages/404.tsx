import React from 'react';
import NotFoundPage from './pages/notfound';
import { Page } from 'types/layout';

const Custom404: Page = () => {
    return <NotFoundPage />;
};

Custom404.getLayout = function getLayout(page) {
    return page;
};

export default Custom404;
