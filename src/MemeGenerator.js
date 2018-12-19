import React, { Component } from 'react';   
import ImgPicker from './ImgPicker';
import MemePreview from './MemePreview';
import TextInputs from './TextInputs'

class MemeGenerator extends Component {
    constructor(){
        super();
        this.state = {
            topText: '',
            bottomText: '',
            selectedImg: "/memes/meme4.jpg"
        }
    }

    //function for setTopText
    setTopText = (e) => { 
        const newValue = e.target.value;
        this.setState({topText:newValue})
    }

    //function for setBottomText
    setBottomText = (e) => { 
        const newValue = e.target.value;
        this.setState({bottomText:newValue})
    }

    //function for selectImg
    selectImg = (e) => {
        console.log(e.target.src);
        this.setState({selectedImg: e.target.src});
    }

    render() {
        const {topText,imgFiles} = this.props;
        return (
            <div>
                <ImgPicker {...this.props} imgFiles={imgFiles} selectImg={this.selectImg}/>
                <MemePreview topText={this.state.topText} bottomText={this.state.bottomText} img={this.state.selectedImg}/>
                <TextInputs topText={this.state.topText} setTopText={this.setTopText} bottomText={this.state.bottomText} setBottomText={this.setBottomText}/>
            </div>
        );
    }
}

export default MemeGenerator;