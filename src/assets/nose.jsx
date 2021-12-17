import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Nose ({choices,setChoices, symptomsNose, setSymptomsNose} ){
    
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
    
    <svg OnClick={handleClick} className="nose" fill="none" height="36" viewBox="0 0 25 36" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m12.2053.535645c6.1592 0 7.9473 7.367695 7.9473 8.269065l3.9737 18.96789c-.0036 1.0814-.1917 2.1545-.5563 3.1744-.2646.6788-.6115 1.3236-1.0332 1.9203-.8922 1.2483-2.1773 2.1712-3.6557 2.6257-.5093.1195-1.0276.1981-1.5498.2351-3.4968 0-6.9539 0-10.45077 0-.5273-.0439-1.04749-.1491-1.54974-.3135-1.39455-.4708-2.60386-1.3619-3.45711-2.5473-.43634-.5877-.7843-1.2345-1.033133-1.9203-.286028-.7281-.460163-1.4942-.516598-2.273-.019823-.3263-.019823-.6535 0-.9798.993421-6.6623 2.900791-12.2272 3.973681-18.88949.19868-1.29327 1.7087-8.190686 7.90767-8.269065z" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
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
     {symptomsNose.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsNose(
             symptomsNose.filter(item => item.name !== e.name)
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