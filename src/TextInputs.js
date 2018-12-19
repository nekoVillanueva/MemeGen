import React, { Component } from 'react';

class TextInputs extends Component {
    render() {
        const {topText, bottomText, setTopText, setBottomText} = this.props;
        return (
            <div>
                <input type="text" value={topText} onChange={setTopText} />
                <input type="text" value={bottomText} onChange={setBottomText} />
            </div>
        );
    }
}

export default TextInputs;