import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Eyes({choices,setChoices, symptomsEyes, setSymptomsEyes}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    return (
        <>
        <svg  onClick={handleClick} className="eyes" fill="none" height="29" viewBox="0 0 85 29" width="85" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m17.6876.897461c9.5368 0 17.2855 6.192059 17.2855 13.794939 0 7.6029-7.9474 13.7558-17.2855 13.7558-9.33819 0-17.325295-6.1921-17.325295-13.7558 0-7.56369 7.748685-13.794939 17.325295-13.794939zm49.075 0c9.8945 0 17.9213 6.113679 17.9213 13.638239 0 7.5245-8.0268 13.5206-17.8418 13.5206s-17.8816-6.0745-17.8816-13.599c0-7.52454 7.9474-13.559839 17.8816-13.559839z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>
        <Popover
     id={id}
     open={open}
     anchorEl={anchorEl}
     onClose={handleClose}
     anchorOrigin={{
       vertical: 'bottom',
       horizontal: 'right',

     }}
   >
       <div className="popover-content">

       <List
   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
   aria-label="contacts"
 >
     {symptomsEyes.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsEyes(
             symptomsEyes.filter(item => item.name !== e.name)
         )
         setChoices([...choices, e])
    
     }}>
       <ListItemText>
           <p style={{
         fontSize:30,
         fontFamily: 'Montserrat'
           }}>{e.name}</p>
       </ListItemText>
     </ListItemButton>
   </ListItem>
         )
     })}
   
  
 </List>
       </div>
   </Popover>
        </>
    )
}