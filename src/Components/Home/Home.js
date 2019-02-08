import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import { inject, observer } from "mobx-react";

@observer
class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <h1 className="main-title">Essential<br/>
            Drugs and<br/>
            Medicines List <br/>

            in Zimbabwe
        </h1>
          <Link className="btn-read-guidelines" to="/chapters/1">Read Guidelines...</Link>
          <p className="edliz-intro">
            This 7th essential medicines list and standard treatment guidelines for the most
            common health conditions in Zimbabwe has been endorsed by the National Medicine &
            Therapeutics Policy Advisory Committee. It is the product of many years of combined
            efforts by hundreds of health workers at all levels of the health care system in Zimbabwe
          </p>
        <Link className="btn-settings" to="/settings">SETTINGS</Link> 
      <Link className="btn-settings" to="/information">INFORMATION</Link> 
      </div>
    );
  }
}
export default inject('EdlizStore')(observer(Home))
