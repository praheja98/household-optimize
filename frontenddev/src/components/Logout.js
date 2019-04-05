import React,{Component} from 'react';
import {withCookies , Cookies} from 'react-cookie';
import {Alert} from 'react-bootstrap';


class Logout extends Component{

    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state={loggedOut:false};
    }

    componentDidMount() {
        const {cookies} = this.props;
        fetch('http://localhost:3017/logout')
        .then(response => response.json())
        .then(data => {
            cookies.remove('loginCredentials');
            this.setState({loggedOut:true});


        })
    }


render() {


    return (

        <div className='logout-main'>
        
        {
            this.state.loggedOut ?
            <Alert variant='danger'>
            Congratulations you are logged out 
            </Alert>
            : null
        }
        
        
        </div>


    )



}
}

export default withCookies(Logout);