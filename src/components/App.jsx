import React from 'react';
import './app.css';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="wrapper">
                    
                    <Body />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default App;