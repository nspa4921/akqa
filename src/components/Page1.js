import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import adtralza from '../images/adtralza-packshot-gebaut-01 2.png';

function Page1() {
  return (
    <div className="page1">
        <div className="row">
            <div className="col-sm-4">
            <img src={adtralza} alt=""/>
        </div>
        <div className="col-sm-8">
            <div className="adtralza-text">
            <h2>It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h2> 
            <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Page1;