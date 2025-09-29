import React from "react";

class Footer extends React.Component{
    render(){
        let {text} = this.props;
        return(
            <footer style={{background: "#0088ff", padding: "20px 0", fontSize: "20px", color: "#fff"}}>
                {text} {}
            </footer>
        )
    }
}

export default Footer;