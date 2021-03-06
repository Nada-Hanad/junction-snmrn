import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Mouth ( {choices,setChoices, symptomsMouth, setSymptomsMouth}) {
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
    <svg  onClick={handleClick} className="mouth" fill="none" height="39" viewBox="0 0 82 39" width="82" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2.26314 7.09435 2.10604-.86218c24.75582-8.45935 51.79452-7.69267 76.01662 2.15545l1.2318 2.27298-.5563 3.9191c-.9142 3.8194-2.6487 7.401-5.0863 10.5029-1.5855 1.9631-3.4608 3.6805-5.5632 5.0947-.9699.6352-1.9784 1.2111-3.02 1.7243l-2.7021 1.2149c-2.1458.9014-4.371 1.7244-6.5963 2.4298-2.922.9555-5.91 1.7021-8.9408 2.2338-2.6219.4688-5.2828.6919-7.9473.6663-.6211.0597-1.2466.0597-1.8677 0h-.5166c-.9262.0596-1.8553.0596-2.7815 0-1.0406-.0862-2.0754-.2302-3.0995-.4311-3.2526-.5536-6.4455-1.4064-9.5369-2.5474-4.0365-1.4751-7.9217-3.3253-11.6031-5.5258-.783-.4777-1.527-1.015-2.2253-1.6068-3.42513-3.011-5.95297-6.8861-7.31156-11.2083-.75292-2.1657-1.298388-4.3962-1.629229-6.6623v-.66624z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
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
     {symptomsMouth.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsMouth(
             symptomsMouth.filter(item => item.name !== e.name)
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