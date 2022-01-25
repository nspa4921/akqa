import React from "react";
import circle from "../images/circle.svg";
import circle2 from "../images/circle2.svg";
import circle3 from "../images/circle3.svg";


const Page2 = () => {
    return (
        <div id="page2" className="page2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <img src={circle} alt=""/>
                            </div>
                            <h3>Long term sustained improvement</h3>
                            <p>9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). </p>
                            <a href="/#">See efficacy and trial data</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle">
                            <img src={circle2} alt=""/>
                            </div>
                            <h3>Improvements in the burden of disease</h3>
                            <p>Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).</p>
                            <a href="/#">Learn more about quality of life improvements</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                        <img src={circle3} alt=""/>
                            </div>
                            <h3>Good safety profile</h3>
                            <p>The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks* and 52 weeks(19).</p>
                            <a href="/#">See safety profile </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2;