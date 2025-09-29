import React from "react";
import './Range.css'; 

class Range extends React.Component{
    state = {val: 100}

    range = (event) => {
        this.setState({val: event.target.value})
    }

    render(){
        const squareSize = this.state.val;
        
        return(
            <>
                <hr />
                <div className="range-container">
                    <h3>Выберите размер квадрата</h3>
                    <input 
                        type="range" 
                        onChange={this.range} 
                        min="0" 
                        max="240" 
                        step="10"
                        value={this.state.val}
                    />
                    <p>Размер: {this.state.val} × {this.state.val} px</p>
                    
                    <div 
                        className="square" 
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`
                        }}
                    >
                    </div>
                </div>
            </>
        )
    }
}

export default Range;