import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useEffect } from 'react';
import Face1 from './img/face-1.webp';
import Face2 from './img/face-2.webp';
import Face3 from './img/face-3.webp';
import Face4 from './img/face-4.webp';
import Face5 from './img/face-5.webp';
import Screen from './img/screens.webp';
import Face6 from './img/face-6.webp';
import Face7 from './img/face-7.webp';
import Face8 from './img/face-8.webp';
import Face9 from './img/face-9.webp';
import Screens from './img/screen-2.webp';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import Heart from './img/heart.svg';
import Parallax from 'react-rellax';
import Calculator from './calculator.jsx';

const Body = () => {
    return (
            <main className="body">
                <div className="body__container">
                    <section className="body__main-section">
                        
                        <div className="body__main-text">
                            <h1 className="body__headline">Give your </h1>
                            <h1 className="body__headline">fans a voice</h1> 
                            <div className="body__paragraph-box">
                                <p className="body__paragraph">Build a deeper connection</p>
                                <p className="body__paragraph">with your most devoted followers</p>
                            </div>
                        </div>
                    </section>
                    <div className="body__section-divider"></div>
                    <section className="body__screen-section body__section-flex">
                        <div className="body__text-lines body__margin">
                            <div className="body__h3">
                                <h3>Connect with fans,</h3>
                                <h3>build your squad</h3>
                            </div>
                            <div className="body__text-flexbox">
                                <div className="body__subtitle">
                                    <p>Host live video rooms,</p>
                                    <p>sell tickets and subscriptions</p>
                                </div>
                                <div className="body__divider margin-0"></div>
                                <div className="body__subtitle">
                                    <p>Bring fans on stage,</p>
                                    <p>take questions, start collectives</p>
                                </div>
                            </div>
                        </div>
                        <div className="screen-parallax">
                                <div className="body__screenshots">
                                    <img src={Screen} />
                                </div>
                        </div>
                    </section>
                    <section className="body__section-flex">
                    <div className="body__text-lines">
                            <div className="body__h3">
                                <h3>Monetize and split revenue </h3>
                                <h3>instantly on the <span>Creator Card</span> </h3>
                            </div>
                            <div className="body__text-flexbox">
                                <div className="body__subtitle">
                                    <p>We only take 10%</p>
                                    <p>And you keep 100% of your tips</p>
                                </div>
                                <div className="body__divider margin-0"></div>
                                <div className="body__subtitle">
                                    <p>For an additional 5%,</p>
                                    <p>get paid in seconds</p>
                                </div>
                                <div className="body__applepay-logo">
                                    <FontAwesomeIcon icon={faApplePay} size="5x"/> 
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                    <div className="body__calc-box">
                        <Calculator />
                    </div>
                    <div className="body__container">
                    <section className="body__section-flex">
                        <div className="body__text-n-picture body__text-lines">
                            <div className="body__text-block">
                                <div className="body__h3">
                                    <h3>This is how Creator</h3>
                                    <h3>Economy really scales</h3>
                                </div>
                                <div className="body__subtitle">
                                    <p>Followers turn into subscribers, fans become </p>
                                    <p>collaborators, audiences evolve into communities</p>
                                </div>
                                <div className="body__text-description">
                                    <div className="body__text-icon">
                                        <img src={Heart} />
                                    </div>
                                    <div className="body__divider-2"></div>
                                    <div className="body__text">
                                        <p>We want to make being a creator safer by setting aside 1% of
                                            our revenue towards <span className="body__text-additional">Creator Mental Health Fund</span>  that will 
                                            financially support creators who need a break and provide 
                                            education on avoiding burnout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="body__pic-block">
                                <div className="body__pic first">
                                    <img src={Face6}/>
                                </div>
                                <div className="body__pic second">
                                    <img src={Face7}/>
                                </div>
                                <div className="body__pic third">
                                    <img src={Face8}/>
                                </div>
                                <div className="body__pic fourth">
                                    <img src={Face9}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="body__screenshots">
                            <img src={Screens} />
                        </div>
                    </section>
                    <section>
                        <div className="body__launch">
                            <div className="body__h3">
                                <h3>We’re launching our first</h3>
                                <h3>50 creators in 2021</h3>
                            </div>
                            <div className="body__subtitle">
                                <p>Together, we will shape the platform and build a safe </p>
                                <p>and diverse space for every voice</p>
                            </div>
                            <div className="body__text-sub">
                                <p>Pioneers will have access to product meetings, and can develop the community by referring other creators. The first 50 creators also get 50% of our profits from referred creators—forever. No limits. </p>
                            </div>
                            <div className="body__button-box">
                                <a href="#" className="body__button creator">Apply as a Creator</a>
                                <a href="#" className="body__button manager">Register as a Manager</a>
                            </div>
                        </div>
                        <div className="body__section-divider"></div>
                    </section>
                </div>
            </main>
    )
};

export default Body;