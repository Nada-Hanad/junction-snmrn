import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Boobs({choices,setChoices, symptomsBoobs, setSymptomsBoobs}){
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
    <svg onClick={handleClick} className="boobs" fill="none" height="76" viewBox="0 0 202 76" width="202" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m4.64467 58.0252c1.20347 2.4664 2.74074 4.7604 4.56974 6.8191 2.24579 2.565 4.93699 4.7149 7.94739 6.3489 5.4626 2.9636 11.6075 4.4888 17.8418 4.4285 3.1856.0392 6.3672-.2365 9.4971-.823 6.8534-1.3174 13.3674-3.9831 19.1532-7.8381 4.4109-2.9023 8.3047-6.5042 11.5237-10.6598 3.1147-3.9938 5.348-8.5859 6.5566-13.4815.5011-2.0411.7677-4.1313.7947-6.2312.001-1.2318-.0786-2.4623-.2384-3.6839-.4743-2.9423-1.3988-5.7966-2.7419-8.4651-1.7963-3.6619-4.1853-7.0108-7.0731-9.9152-3.7689-3.7762-8.1632-6.89078-12.994-9.20974-4.2297-2.06766-8.7616-3.46938-13.431-4.1542-1.5498 0-3.0598-.313513-4.6095-.391894h-1.5498c-4.1574.06687-8.2767.794724-12.1992 2.155484-8.7408 3.12358-16.1599 9.06005-21.06049 16.85185v.7446h-.35763c-1.85315 3.023-3.28339 6.2791-4.25184 9.68-.68376 2.4454-1.109876 4.9538-1.271581 7.4854-.139121 1.9179-.139121 3.8431 0 5.761.319461 4.9452 1.586931 9.7858 3.735261 14.2653zm156.68233-57.100369c-1.543.018512-3.082.136319-4.609.352699-4.669.61023-9.214 1.93235-13.471 3.91904-4.863 2.27463-9.297 5.34933-13.113 9.09223-2.936 2.8708-5.378 6.193-7.232 9.8367-1.315 2.6353-2.226 5.4485-2.703 8.3476-.216 1.2953-.323 2.6062-.317 3.919.013 2.2478.307 4.4853.874 6.6624 1.243 4.7248 3.447 9.1513 6.477 13.0112 3.207 4.1775 7.102 7.7941 11.524 10.699 5.781 3.8626 12.297 6.529 19.153 7.838 2.934.5475 5.914.8231 8.901.823 6.256.2106 12.464-1.1515 18.04-3.9582 3.108-1.6908 5.882-3.9213 8.186-6.584.742-.8622 1.457-1.7636 2.146-2.7041 3.689-5.5862 5.814-12.0357 6.159-18.6938.119-1.9185.119-3.8425 0-5.761-.161-2.3688-.547-4.7174-1.152-7.0151-1.724-6.2186-4.917-11.9464-9.316-16.7145-4.4-4.76816-9.881-8.44126-15.997-10.71875-3.848-1.4083-7.899-2.20208-12-2.351419z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
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
     {symptomsBoobs.map((e)=>{
         return(
             <ListItem disablePadding>
     <ListItemButton onClick={()=>{
         setSymptomsBoobs(
             symptomsBoobs.filter(item => item.name !== e.name)
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