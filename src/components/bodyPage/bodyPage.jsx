import './bodyPage.css'

import Body from '../body/body'
import {Link} from 'react-router-dom'
export default function BodyPage({choices, setChoices}){
    return (
        <div className="body-page-p">
            <div className="upper-body-page">
            <h1>Diagnosis</h1>
            </div>
            <div className="main-container">

            <div className="body-container">
                <Body choices={choices } setChoices={setChoices}></Body>
                </div>
                <div className="choices-container">
                    <h1 style={{fontFamily:'Poppins'}}>Please press on any body part to select relevent symptoms to you.</h1>
                   <br />
                    <div className="choices">
                    {choices.map((e)=>{
          return(<div className="choice-item">
            <p style={{
            fontSize:40,
            fontWeight:'bold',
            fontFamily: 'Montserrat'
              }} >
              {e.name}
            </p>
           
          </div> )
        }) } 
                    </div>
                   
                    <div className="lower-body-page">
                        <Link  style = {{textDecoration: 'none', color:'black'}} to='/questions'>
            <div className="next-button">
            <h1 style ={{
                fontFamily:'Poppins',
                color:'white',
                margin:0,
                fontSize:60,
            }}>Next</h1>
            </div>
                        </Link>
        </div>
                </div>
            </div>
               
           
        </div>
    )
}