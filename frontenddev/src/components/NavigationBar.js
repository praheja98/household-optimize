import React,{Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import '../App.css';
import {withCookies,Cookies} from 'react-cookie';

class NavigationBar extends Component {

constructor(props) {
    super(props);
    const {cookies} = props;
    this.state = {loggedIn : false , loginInfo:'' , hour:''};
}

componentDidMount() {
    const {cookies} = this.props;
    if(cookies.get('loginCredentials')) {
        this.setState({loggedIn:true,loginInfo:cookies.get('loginCredentials')});
    }
    this.getHour();

}

getHour() {
    var date = new Date();
    var hour = date.getHours();
    this.setState({hour});

}

render() {

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto" style={{width:'100%'}}>
            {
                this.state.loggedIn ?
                <Nav.Link className='header'> Welcome {this.state.loginInfo} 
                {
                    this.state.hour < 12 ? <span > Good Morning</span>
                    : <span > Good Evening</span>
                }
                
                </Nav.Link>
                : 
                null
            }
            <Nav.Link href="/listofhouseholds" style={{marginLeft:'auto'}}> List of Households </Nav.Link>
            <Nav.Link href='/createhousehold'> Create Household </Nav.Link>
            <Nav.Link href="/billpayments"> Bill Payments </Nav.Link>
            <Nav.Link href="/Logout" className='testing'> Logout </Nav.Link>
            </Nav>
        </Navbar>

    )


}

}

export default withCookies(NavigationBar);
