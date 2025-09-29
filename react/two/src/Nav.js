import './Nav.css';

function Nav(props){
    let {navigation} = props; 
    return(
        <nav>
            <ul>
                {
                    Object.keys(navigation).map(elem => {
                        return <li key={elem}>
                            <a href={navigation[elem]}>{elem}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;