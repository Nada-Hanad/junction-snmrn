import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function LowerLegs({choices,setChoices, symptomsLowerLegs, setSymptomsLowerLegs}){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return(
        <>
        
    <svg onClick={handleClick} className="lower-legs" fill="none" height="224" viewBox="0 0 288 224" width="288" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m45.8107 223.348h-40.69052v-2.665l-.27815-5.408c-.71527-17.505-1.37755-35.01-1.98684-52.514-.63579-17.061-1.15237-34.122-1.54974-51.183 0-5.525-.23843-11.091-.317901-16.6163 0-4.742 0-9.4448 0-14.1868s.238421-8.269.437111-12.384c.31789-6.3096.79474-12.6192 1.43053-18.8896.55631-5.4082 1.23184-10.7773 2.06631-16.1463.59606-3.919 1.27159-7.838 2.22527-11.4043l2.62263-9.484 2.265-9.56238c4.2687 3.15969 8.8639 5.86574 13.7092 8.07318 8.9081 4.0595 18.2339 7.1604 27.8158 9.2488 10.2475 2.2967 20.6656 3.7777 31.1537 4.4285l-.8742 13.8733v9.5623 4.5069c-.5937 14.3877-2.2271 28.7154-4.8877 42.8739-1.0331 5.5258-2.1855 11.0518-3.4968 16.4988-.9537 3.919-2.0663 8.073-3.2584 12.071-.2384.862-.5166 1.724-.7948 2.547l-.7152 2.038-1.1127 3.566c-2.6491 9.066-5.2982 18.145-7.9473 27.237-3.2584 11.209-6.3579 22.495-9.3779 33.782-.9537 3.723-1.9074 7.486-2.8213 11.209-.6756 2.704-1.2716 5.369-1.7882 8.112zm241.8783 0h-42.399l-.914-8.622c-.292-1.933-.61-3.853-.954-5.76-.199-1.215-.437-2.43-.715-3.606-.437-1.999-.954-3.919-1.51-5.878-.795-2.705-1.59-5.409-2.424-8.074-2.066-6.479-4.212-12.919-6.438-19.32-3.099-8.857-6.251-17.688-9.457-26.493-2.119-5.774-4.265-11.509-6.437-17.204l-2.623-6.937c-.358-1.019-.755-1.999-1.113-2.978-3.544-10.26-6.424-20.7322-8.622-31.3523-.954-4.3893-1.789-8.8177-2.544-13.2462s-1.311-8.7786-1.748-13.207c-.318-3.919-.596-7.407-.914-11.13-.238-2.8217-.556-5.6826-.874-8.5043-.477-3.919-.994-7.838-1.51-11.5219l-1.908-11.1299h15.339c2.623-.196 5.205-.4311 7.947-.7054 17.449-1.7625 34.233-7.5486 48.996-16.890914l2.146 6.348764c.357.97976.675 1.95948.993 2.97845.318 1.0189.874 3.0176 1.311 4.546l2.067 6.7016c.953 3.2527 1.907 6.5447 2.781 9.8366 4.043 14.0537 6.443 28.5174 7.153 43.1091 0 3.3311 0 6.6622.278 9.9934.636 21.907 1.351 43.854 2.027 65.761.198 7.328.437 14.618.635 21.907.199 7.29.398 15.676.557 23.514 0 5.33.238 10.699 0 16.068v2.822 1.881 1.097c0 1.254 0 2.508.318 3.919z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
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
     {symptomsLowerLegs.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsLowerLegs(
             symptomsLowerLegs.filter(item => item.name !== e.name)
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
    )}