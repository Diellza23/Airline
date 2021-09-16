import { observer } from 'mobx-react-lite';
import { userInfo } from 'os';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import udhetariStore from '../../app/stores/udhetariStore';
import UdhetariStore from '../../app/stores/udhetariStore';
import LoginFormUdhetari from '../udhetaret/form/LoginFormUdhetari';
import RegisterFormUdhetari from '../udhetaret/form/RegisterFormUdhetari';
// import LoginFormUdhetari from '../udhetaret/form/LoginFormUdhetari';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';


export default observer(function HomePage() {
  const {userStore, modalStore,udhetariStore} = useStore();
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Image size='massive' src='/assets/airline.png' alt='logo' style={{padding: '25px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  backgroundPosition:'center'}} />
      <Container text style={{marginTop:'-450px'}}>
        <Header as='h1'  >
          Airline
        </Header>
        
        {userStore.isLoggedIn ? (
          <>
              <Header as='h2'  content='Welcome to Airlines'/>
              <Button as={Link} to='/punetoret' size='huge' inverted>
                You may go on
              </Button>
          </>

        ) : (
          <>
                <Button onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' style={{color:"white",backgroundColor:"#ff9f45"}}>
                Login Admin!
              </Button>
                <Button onClick={() => modalStore.openModal(<RegisterFormUdhetari/>)} size='huge' style={{color:"white",backgroundColor:"green"}}>
                Sign Up!
              </Button>
          </>
        )}
          {udhetariStore.isLoggedIn ? (
                    <>
                        <Button as={Link} to='/udhetariProfile' size='huge' inverted>
                            Vazhdo te profili
                        </Button>
                    </>

                ) : (
                    <Button onClick={() => modalStore.openModal(<LoginFormUdhetari />)} size='huge' style={{color:"grey",backgroundColor:"#ffeb33"}}>
                        Login User
                    </Button>
                )}
      </Container>
    </Segment>
  )
})