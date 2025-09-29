import React from "react";

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "Привет"
        }
    }

    changeText = () => {
        this.setState(prevState => ({
            text: prevState.text === "Привет" ? "Hello" : "Привет"
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.changeText}>Заменить</button>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Hello;
