import './formPage.css'

import { Link } from "react-router-dom";
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import TextField from '@mui/material/TextField';
export default function FormPage({age,setAge,sexe,setSexe,fName,setfName,lName,setlName}){
 

      const handleChange = (event) => {
        setAge(parseInt(event.target.value, 10));
      };
      const handleChangefName = (event) => {
        setfName(event.target.value);
      };
      const handleChangelName = (event) => {
        setlName(event.target.value);
      };

    return (
        <div className="form-page">
            <div className="upper-form-page">
            <h1>Please enter the following information to continue.</h1>
            
            </div>
           
          <div style={{
              display:'grid',
              placeItems:'center',
              padding:0,
              margin:0,
             
          }}>

        <div className="form-container">
           
            <div className="upper-form">
            <h1 style={{marginRight:100}}>First name</h1>
         
        <TextField
        InputLabelProps={{
            style: {
              fontSize: 50,
  
            
            },
          }}
          inputProps={{
            style: {
              fontSize: 50,
              height: 50,
              width: 672,
              
              padding: '40px',
            fontFamily:'Poppins'
            },
        }}
          id='demo-customized-textbox'
          type='text'
          value={fName}
          onChange={handleChangefName}
        />

            </div>
            <br />
            <br />
            <div className="upper-form">
            <h1 style={{marginRight:105}}>Last name</h1>
           
        <TextField
        InputLabelProps={{
            style: {
              fontSize: 50,
              
  
            
            },
          }}
          inputProps={{
            style: {
              fontSize: 50,
              height: 50,
              width: 672,
              
              padding: '40px',
            fontFamily:'Poppins'
            },
        }}
          id='demo-customized-textbox'
          type='text'
          value={lName}
          onChange={handleChangelName}
        />
      
            </div>
            <br />
            <br />
            <div className="upper-form">
          <h1 style={{marginRight:100,marginLeft:260}}>Age</h1>
       

        <TextField
        InputLabelProps={{
            style: {
              fontSize: 50,
  
            
            },
          }}
          inputProps={{
            style: {
              fontSize: 50,
              height: 50,
              width: 672,
              
              padding: '40px',
            fontFamily:'Poppins'
            },
        }}
          id='demo-customized-textbox'
          type='number'
          value={age}
          onChange={handleChange}
        />
     
            </div>
            <br />
            <div className="upper-form">
          <h1 style={{marginLeft:120, marginRight:100}}>Gender</h1>
       <div style={{}} className="gender-girl">
       <WomanIcon onClick={()=>{
           setSexe('female')
       
       }} sx={{fontSize:250, color:'#808080'}}></WomanIcon>
       </div>
       <div  className="gender-girl">
       <ManIcon onClick={()=>{
           setSexe('male')
       }} sx={{fontSize:250, color:'#808080'}}></ManIcon>
       </div>
            </div>
            <div className="lower-form">
            <Link style = {{textDecoration: 'none', color:'black'}} to="/symptoms">

            <div  className="next-button">
            <h1 style ={{
                fontFamily:'Poppins',
                color:'white',
                margin:0
            }}>Next</h1>
            </div>
            </Link>
        </div>
        </div>
       
          </div>
        </div>
    )
}