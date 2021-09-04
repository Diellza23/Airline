// import React  from 'react';
// import Footer from './Footer';
// import MainContent from './MainContent';
// import SideMenu from './SideMenu';
// import TopMenu from './TopMenu';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import HomeIcon from '@material-ui/icons/Home';
// import { Link } from 'react-router-dom';
// import { Theme, createStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import { Fragment } from 'react';
// import image from './Smis.png';
// // import itemData from './itemData';


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     imageList: {
//       flexWrap: 'nowrap',
//       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//       transform: 'translateZ(0)',
//     },
//     title: {
//       color: theme.palette.primary.light,
//     },
//     titleBar: {
//       background:
//         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
//   }),
// );

// const itemData = [
//      {
//       img: image,
//       title: 'Fluturimi i pare',
//       author: 'author',
//       cols: 2,
//      }
//     ];

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
  

//   return (
//     <React.Fragment>
//     <BottomNavigation value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Home" value="/notat" icon={<HomeIcon />} component={Link} to='/notat'/>
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
    
//         <div className={classes.root}>
//       <ImageList className={classes.imageList} cols={2.5}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img src={item.img} alt={item.title} width={700} height={350}/>
//             <ImageListItemBar
//               title={item.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${item.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//       </div>
//     </React.Fragment>
//   );
// };
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';
// import { makeStyles } from '@material-ui/core/styles';
// import TopMenu from './TopMenu';
// import SideMenu from './SideMenu';
// import Footer from './Footer';
// import MainContent from './MainContent';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
// }));

// // const theme = {
// //     color:'white',
// //     // padding:'10px',
// //     backgroundColor:'red'
// //   }
// function HomePage() {
//   const classes = useStyles();

//   return (
//   <>
//   {/* <h1 style={theme}>Diellza</h1> */}
//     <div className={classes.root}>
      
//       <TopMenu />
//       <SideMenu />
//       <MainContent />
//       <Footer />
//     </div>
//     </>
//   );

  
// }

// export default HomePage;

export default observer(function HomePage() {
  const {userStore, modalStore} = useStore();
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
                Stafi
              </Button>
          </>

        ) : (
          <>
                <Button onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' inverted>
                Login!
              </Button>
                <Button onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge' inverted>
                Register!
              </Button>
          </>
        )}
        
      </Container>
    </Segment>
  )
})