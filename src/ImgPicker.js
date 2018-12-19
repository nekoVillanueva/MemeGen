import React, { Component } from 'react';

class ImgPicker extends Component {
    render() {
        const {imgFiles, selectImg}=this.props;
        const imgElements = imgFiles.map(i => <img key={i} onClick={selectImg} src={i}/>);
        return (
            <div>
                {imgElements}
            </div>
        );
    }
}

export default ImgPicker;