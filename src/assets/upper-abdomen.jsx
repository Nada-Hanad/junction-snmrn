import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function UpperAbdomen({choices,setChoices, symptomsUpperAbdomen, setSymptomsUpperAbdomen}){
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
    <svg onClick={handleClick} className='upper-abdomen' fill="none" height="93" viewBox="0 0 197 93" width="197" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m113.107.155273.675 5.604207c1.402 5.57252 3.974 10.79282 7.55 15.32342 3.438 4.3397 7.556 8.1103 12.199 11.1692 6.232 4.1445 13.246 7.01 20.624 8.4259 3.185.5801 6.417.8688 9.656.8622 5.188.0792 10.347-.7843 15.219-2.5473 2.92-1.0508 5.676-2.5021 8.186-4.311 1.625-1.1556 3.129-2.4685 4.49-3.919 1.263-1.2184 2.432-2.5284 3.497-3.9191.318 1.5285.675 3.0961 1.112 4.6245l.318.9014-.874 4.7028c-.675 4.2717-1.271 8.5043-1.867 12.776-1.193 8.3868-2.385 16.7735-3.497 25.1602-.636 4.5853-1.192 9.2097-1.749 13.795l-.397 3.5663h-179.84904l-.79474-7.9556c-.59605-4.7421-1.23184-9.5233-1.86763-14.2653-.91395-6.7799-1.86762-13.5206-2.86105-20.3006-.55631-3.919-1.11263-7.838-1.70868-11.9922 0-1.0581-.357636-2.1554-.516584-3.2136l-.476838-2.3514.834472-3.919.23842-1.4501c2.20699 3.0151 4.89021 5.6615 7.94737 7.8381 2.4496 1.7586 5.1212 3.1946 7.9474 4.2717 4.8861 1.76 10.0576 2.6234 15.2589 2.5474 3.2388.0066 6.4712-.2821 9.6561-.8622 7.3779-1.4159 14.3916-4.2814 20.6234-8.4259 4.6257-3.0809 8.7406-6.8484 12.1992-11.1692 3.5865-4.5189 6.1477-9.7444 7.5103-15.32342l.7152-5.643407z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
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
     {symptomsUpperAbdomen.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsUpperAbdomen(
             symptomsUpperAbdomen.filter(item => item.name !== e.name)
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