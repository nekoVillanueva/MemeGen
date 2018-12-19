import React, { Component } from 'react';
import './MemePreview.css';

class MemePreview extends Component {
    render() {
        const {topText, bottomText, img} = this.props;
        return (
            <div className="preview">
                <div className="line1">
                    {topText}
                </div>
                <div className="memeImg">
                    <img src={img}/>
                </div>
                <div className="line2">
                    {bottomText}
                </div>
            </div>
        );
    }
}

export default MemePreview;