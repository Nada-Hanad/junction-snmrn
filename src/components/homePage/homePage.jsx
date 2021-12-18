import './homePage.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div className="body-page">
            <div className="big-container"></div>
            <div className="container">
            <Link style = {{textDecoration: 'none', color:'black'}} to="/form">

            <div className="btn1" >
               <h1 style={{fontFamily:'Poppins', fontSize:70}}>Diagnosis</h1>
               <BarChartIcon sx={{fontSize:90}} ></BarChartIcon>

            </div>
            </Link>
            <Link style = {{textDecoration: 'none', color:'black'}} to="/information">
            <div className="btn2" >
              <h1 style={{fontFamily:'Poppins',fontSize:70 }}>Information</h1>
              <InfoIcon sx={{fontSize:90}} ></InfoIcon>
            </div>
            </Link>
            </div>
        </div>


        
    
    )
}