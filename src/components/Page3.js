import React from "react";
import img from "../images/image 11.jpg";


const Page3 = () => {
    return (
        <div className="page3">
            <div className="img">
                <img src={img} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." width="150px"/>
            </div>
            <div className="text">
                <h3>Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h3>
                <p>By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2). 
                <br/><br/>
                    Adtralza® selectively modulates the dysregulated immune system by(1): 
                    <br/><br/>
                    <ul>
                        <li>— Reducing markers of skin inflammation</li>
                        <li>— Improving markers of skin barrier integrity </li>
                        <li>— Reducing epidermal thickness</li> 
                    </ul>
                    <button className="btn" onClick={() => {}}>Watch the video</button>
                </p>
                <p>Duration: 2:43</p>
            </div>
        </div>
    )
}

export default Page3;