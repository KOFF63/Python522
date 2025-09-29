import React from "react";

class Form extends React.Component{
    
    state = {text: ""}
    
    update =(event) => {
        this.setState({text: event.target.value})
    }
    render(){
        return (
            <>
                <hr />
                <form>
                    <input value={this.state.text} onChange={this.update}/>
                </form>
                <hr />
                <p>{this.state.text}</p>
            </>
        )
    }
}

export default Form;