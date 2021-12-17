import './body.css'
import Abdomen from '../../assets/abdomen';
import Back from '../../assets/back';
import Boobs from '../../assets/boobs';
import Ears from '../../assets/ears';
import Eyes from '../../assets/eyes';
import Hands from '../../assets/hands';
import Head from '../../assets/head-F';
import Knees from '../../assets/knees';
import LowerAbdomen from '../../assets/lower-abdomen';
import LowerArm from '../../assets/lower-arm';
import LowerBack from '../../assets/lower-back';
import LowerLegs from '../../assets/lower-legs';
import Mouth from '../../assets/mouth';
import Neck from '../../assets/neck';
import Nose from '../../assets/nose';
import Shit from '../../assets/shit-F';
import Thighs from '../../assets/thighs';
import UpperAbdomen from '../../assets/upper-abdomen';
import UpperArm from '../../assets/upper-arm';
import UpperChest from '../../assets/upper-chest';
import Feet from '../../assets/feet';
import { useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export default function Body (){
    const [turned, setTurned] = useState(false);
    const [choices, setChoices] = useState([]);
    const [symptomsEars, setSymptomsEars] = useState([
      {
          "id": "s_47",
          "name": "Earache",
          "common_name": "Earache",
          "orth": "Earache",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_208",
          "name": "Decreased hearing",
          "common_name": "Decreased hearing",
          "orth": "Decreased hearing",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_297",
          "name": "Discharge from ear",
          "common_name": "Discharge from ear",
          "orth": "Discharge from ear",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_276",
          "name": "Clogged ear",
          "common_name": "Clogged ear",
          "orth": "Clogged ear",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_407",
          "name": "Tinnitus",
          "common_name": "Ringing in ears",
          "orth": "Ringing in ears",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "p_209",
          "name": "Ear injury",
          "common_name": "Ear injury",
          "orth": "Ear injury",
          "choice_id": "present",
          "type": "risk_factor"
      }
  ].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
    const [symptomsBoobs, setSymptomsBoobs] = useState([
      {
          "id": "s_219",
          "name": "Enlarged breasts",
          "common_name": "Enlarged breasts",
          "orth": "Enlarged breasts",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_300",
          "name": "Nodule located in breast",
          "common_name": "Lump in the breast",
          "orth": "Lump in the breast",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_547",
          "name": "Galactorrhea",
          "common_name": "Milky discharge from the nipple outside of breastfeeding period",
          "orth": "Milky discharge from the nipple outside of breastfeeding period",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1422",
          "name": "Nipple discharge",
          "common_name": "Leaking from the nipple",
          "orth": "Leaking from the nipple",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_343",
          "name": "Retraction or indentation of nipple",
          "common_name": "Change in the nipple",
          "orth": "Change in the nipple",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_342",
          "name": "Wrinkling or dimpling of skin on breast",
          "common_name": "Wrinkling or dimpling of skin on breast",
          "orth": "Wrinkling or dimpling of skin on breast",
          "choice_id": "present",
          "type": "symptom"
      }]
      .sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));
    const [symptomsHead, setSymptomsHead] = useState([
      {
          "id": "s_21",
          "name": "Headache",
          "common_name": "Headache",
          "orth": "Headache",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_478",
          "name": "Facial pain",
          "common_name": "Facial pain",
          "orth": "Face pain",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1436",
          "name": "Facial pain, paranasal sinus",
          "common_name": "Sinus pain or pressure",
          "orth": "Sinus pain or pressure",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_98",
          "name": "Fever",
          "common_name": "Fever",
          "orth": "Fever",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_616",
          "name": "Edema, face",
          "common_name": "Face swelling",
          "orth": "Swollen face",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1156",
          "name": "Facial muscle paresis",
          "common_name": "Facial muscle weakness",
          "orth": "Facial muscle weakness",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_971",
          "name": "Paresthesia, face",
          "common_name": "Face numbness",
          "orth": "Face numbness",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1543",
          "name": "Loss of consciousness",
          "common_name": "Loss of consciousness",
          "orth": "Loss of consciousness",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_316",
          "name": "Impaired memory",
          "common_name": "Impaired memory",
          "orth": "Impaired memory",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_370",
          "name": "Dizziness",
          "common_name": "Dizzy",
          "orth": "Dizzy",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_156",
          "name": "Nausea",
          "common_name": "Feeling sick",
          "orth": "Feeling sick",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_121",
          "name": "Hair loss",
          "common_name": "Hair loss",
          "orth": "Hair loss",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1808",
          "name": "Dermatological changes, located on the face",
          "common_name": "Skin changes located on the face",
          "orth": "Skin changes located on the face",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "p_232",
          "name": "Recent head injury",
          "common_name": "Recent head injury",
          "orth": "Recent head injury",
          "choice_id": "present",
          "type": "risk_factor"
      }

  ].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}));
    return(
        <>
        {turned ? (
        <div className='body-part-back'>
          <Back></Back>
          <LowerBack></LowerBack>
        </div>
      ) : (
        <div className='body-part-front'>
          <Head choices={choices} setChoices={setChoices} symptomsHead={symptomsHead} setSymptomsHead={setSymptomsHead}></Head>
          <Ears choices={choices} setChoices={setChoices} symptomsEars={symptomsEars} setSymptomsEars={setSymptomsEars} ></Ears>
          <Nose></Nose>
          <Eyes></Eyes>
          <Mouth></Mouth>
          <Neck></Neck>
          <UpperArm></UpperArm>
          <UpperChest></UpperChest>
          <LowerArm></LowerArm>
          <UpperAbdomen></UpperAbdomen>
          <Boobs choices={choices} setChoices={setChoices} symptomsBoobs={symptomsBoobs} setSymptomsBoobs={setSymptomsBoobs}></Boobs>
          <Abdomen></Abdomen>
          <Hands></Hands>
          <Thighs></Thighs>
          <LowerAbdomen></LowerAbdomen>
          <Shit></Shit>
          <Knees></Knees>
          <LowerLegs></LowerLegs>
          <Feet></Feet>
        </div>

      )}
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
        <RestartAltIcon onClick={()=>{

        }}></RestartAltIcon>
      </div>
      </>
    )
}