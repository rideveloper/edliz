import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import './tabs.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem';
import Overlay  from '../../Views/Overlay/Overlay';

class Navigation extends Component {
    render() {
        const  overlayVisibility = (this.props.status === "open")?  "visible" : "hidden";
        return (
            <>
            <nav className={this.props.status} >
                    <div className="nav-header">
                        <h2 className="nav-heading">Essential Drugs and Medicines List in Zimbabwe</h2>
                        <Link className="nav-header-btn" to="/">Home</Link>
                        <Link className="nav-header-btn" to="/information">Information</Link>
                        <Link className="nav-header-btn" to="/settings">Settings</Link>
                    </div>
                    <div className="tab-content">
                        { this.props.content.chapters.map( (section ,  index ) => (
                            <NavigationItem key={index} section={section} chapter={index + 1} />
                        ))}
                     </div>           
            </nav>
            <Overlay visibility={overlayVisibility} dismiss={this.props.toggle()}/>
            </>
        );
    }
}

export default Navigation;