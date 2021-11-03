import React from 'react';
import './app.css';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';
import Face1 from './img/face-1.webp';
import Face2 from './img/face-2.webp';
import Face3 from './img/face-3.webp';
import Face4 from './img/face-4.webp';
import Face5 from './img/face-5.webp';
import Parallax from 'react-rellax';

const App = () => {
    return (
        <div className="app">
            <Header />
                <div className="parallax-moji">
                    <Parallax speed={1}>
                        <div className="body__faces top-face">
                            <img src={Face1} />
                        </div>
                    </Parallax>
                    <Parallax speed={3}>
                        <div className="body__faces left-face">
                            <img src={Face2} />
                        </div>
                    </Parallax>
                    <Parallax speed={4}>
                        <div className="body__faces bottom-left-face">
                            <img src={Face3} />
                        </div>
                    </Parallax>
                    <Parallax speed={3}>
                        <div className="body__faces bottom-right-face">
                            <img src={Face4} />
                        </div>
                    </Parallax>
                    <Parallax speed={1}>
                        <div className="body__faces right-face">
                            <img src={Face5} />
                        </div>
                    </Parallax>
                </div>
            <div className="container">
                <div className="wrapper">
                    
                    <Body />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;