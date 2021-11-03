import React from 'react';
import Arrow from './img/arrow.svg';
import Select from "react-dropdown-select";

const Calculator = () => {
    return (
        <section className="body__calculation-section">
            <div className="body__calculation-box">
                <div className="body__sub-num">
                    <div className="body__sub-select">
                        <h3 className="body__h3">10K</h3>
                    </div>
                    <div className="body__subtitle">
                        <p>Subcribers</p>
                    </div>
                </div>
                <div className="body__mon-num">
                    <div className="body__sub-select">
                        <h3 className="body__h3">$5</h3>
                    </div>
                    <div className="body__subtitle">
                        <p>Per month</p>
                    </div>
                </div>
                <div className="body__divider-2 orientation"></div>
                <div className="body__result-num">
                <div className="body__sub-select">
                    <h3 className="body__h3">$31,500</h3>
                </div>
                    <div className="body__subtitle">
                        <p>Мonthly earnings, before tips</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator;