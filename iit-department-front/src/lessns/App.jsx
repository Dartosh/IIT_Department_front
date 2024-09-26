import React, {Fragment} from 'react';

import Header from './Header';
import Footer from '../../old/les3';

const App = ({children}) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
);

export default App;