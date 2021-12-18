import './qPage.css'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { CircularProgress } from '@mui/material';
import ResultCard from './resultCard';

var axios = require('axios');
const Infermedica = require('infermedica');
const infermedica = new Infermedica({
  appId: '8d5d6688',
  appKey: '4b1b4b84ecaeb6126c5be3cabb38af29'
});
export default function QPage( {age,
    sexe,
    evidence,
    setEvidence,
    choices,
    setchoices,
    conditions,
    setConditions,
    recommendation,
    setRecommendation}){
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false)
    const [error, setError] = useState(false)
    const [question, setQuestion] = useState()
    const [chosen, setchosen] = useState(false);
  const [colors, setColors] = useState(['white', 'white', 'white']);
    const fetchQ=(evid)=>{
        setLoading(true)
        setColors(['white', 'white', 'white']);
        setError(false)
        infermedica
        .postDiagnosis({
          sex: sexe,
          age: age,
          evidence: evid,
          extras: { disable_groups: true }
        }).then(resp=>{
            
            if (resp.should_stop === true) {
              
                setConditions(resp.conditions.slice(0, 3));
                
                var data = JSON.stringify({
                  sex: sexe,
                  age: { value: age },
                  evidence: evidence
                });
                var config = {
                  method: 'post',
                  url: 'https://api.infermedica.com/v3/recommend_specialist',
                  headers: {
                    'App-Key': '4b1b4b84ecaeb6126c5be3cabb38af29',
                    'App-Id': '8d5d6688',
                    'Content-Type': 'application/json'
                  },
                  data: data
                };
                axios(config)
                  .then((resp) => {
                    setRecommendation(resp.data);
                  })
                  .catch((err) => {
                    setError(true);
                  });
                Swal.fire({
                  title: "You're all set!",
                
                  icon: 'success',
                  customClass:'swal-wide',
                  confirmButtonText: 'Okay',
                  confirmButtonColor: '#58cad9'
                }).then((result) => {
                  if (result.isConfirmed) {
                    setDone(true)
                  }
                });
              } else {
                if (resp.question == null) {
                  Swal.fire({
                    title: 'Please provide us more intel to proceed.',
                    icon: 'warning',
                    customClass:'swal-wide',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#58cad9'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    
                    }
                  });
                } else {
                    console.log(resp)
                  setQuestion(resp.question);
                }
              }





        }).catch(err=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    }
   
    useEffect(() => {
        var newArray=[]
        choices.map((e)=>{
            newArray.push({
               "choice_id":e.choice_id,
               "id":e.id ,
               "source":"initial",
            })
            console.log(newArray)
            setEvidence(newArray)
            fetchQ(newArray)
        })

      

    }, []);
    const yes = () => {
        setColors(['#91E1EC', 'white', 'white']);
        setchosen(true);
      };
      const no = () => {
        setColors(['white', '#91E1EC', 'white']);
        setchosen(true);
      };
      const idk = () => {
        setColors(['white', 'white', '#91E1EC']);
        setchosen(true);
      };
      const requestUpdate = () => {
        var newEvidence;
        if (colors[0] === '#91E1EC') {
          newEvidence = {
            id: question.items[0].id,
            choice_id: 'present'
          };
        } else if (colors[1] === '#91E1EC') {
          newEvidence = {
            id: question.items[0].id,
            choice_id: 'absent'
          };
        } else {
          newEvidence = {
            id: question.items[0].id,
            choice_id: 'unknown'
          };
        }
        var newArray = [...evidence, newEvidence];
        console.log(question);
        console.log(newArray);
        setEvidence(newArray);
        fetchQ(newArray);
        setchosen(false);
      };
    return(
        <div className="q-page">
        <div className="upper-q-page">
        <h1>Diagnosis</h1>
        </div>
        {
            done? (<>
             <>
                          
                            <p style={{ textAlign: 'center', fontSize: 68, fontFamily:'Poppins' }}>
                              You may require a medical consultation when
                              possible. We recommend that you visit this type of
                              specialist:
                              {' ' +
                                recommendation.recommended_specialist?.name}
                              .
                            </p>
                          </>
                          <div>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <div className='results-tab'>
                                    <div>
                                      {conditions.map((e) => (
                                        <ResultCard condition={e}></ResultCard>
                                      ))}
                                    </div>
                                    <div className='triage'>
                                      <div className='third-container'></div>
                                      
                                    </div>
                                  </div>
                                  <div  className="next-button" id='finatNext' >
                                    <a href="http://localhost:3004/">
                                    <h1 style ={{
                                        fontFamily:'Poppins',
                                        fontSize : '60px',
                                        color:'white',
                                        margin:0
                                    }}>Next</h1>
                                    </a>
                                    </div>                 
                                </div>
                  </div>
            </>):<div className="q-card">
        {
                loading? <CircularProgress size="200px"></CircularProgress> : error? <h1>An error has occured try again.</h1> : 
                <div className="question-container">
                    <div className="question">
                <h1 style={{fontSize:70}}>{question.text}</h1>
            </div>
            <div className="answers">

            <div style={{
                    backgroundColor:colors[0]
                }} onClick={yes} className="button">
                <h1 >Yes</h1>
            </div>
            <div style={{backgroundColor:colors[1]}} onClick={no} className="button">
                <h1>No</h1>
            </div>
            <div style={{backgroundColor:colors[2]}} onClick={idk} className="button">
                <h1>I don't know</h1>
            </div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', justifyContent:'end', marginTop:"150px"}}>

            <div  onClick={requestUpdate} className="next-button">
            <h1 style ={{
                fontFamily:'Poppins',
                color:'white',
                margin:0
            }}>Next</h1>
            </div>
            </div>
                </div>
                
            }
           
        </div>
        }
        
   
           </div>)
}