import React from 'react';
import './app.css';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;