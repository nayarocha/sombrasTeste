import React,{ Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   /*menuButton: {
     marginRight: theme.spacing(2),
   },*/
   title: {
     flexGrow: 1,
   },
 }));

//export default Header;

export default function SimpleAppBar() {
   const classes = useStyles();
 
   return (
    
        <div className={classes.root}>
       <AppBar position="static">
         <Toolbar>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" className={classes.title}>
             Teste sombras
           </Typography>
           
         </Toolbar>
       </AppBar>
     </div>

   
     
   );
}

/*uma const que retorna uma funcao
const Header = () => (
   <Button variant="contained" color="primary">
   Hello World
 </Button>

);*/


//export default Header;

/*2 forma de utilizar
Quando for necessário utilizar estados

class Header extends Component {
    render(){
        return <h1>Hello</h1>
    }
*/
