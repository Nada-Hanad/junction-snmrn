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

    const [symptomsHands, setSymptomsHands] = useState([
        {
            "id": "s_1430",
            "name": "Joint pain, wrist",
            "common_name": "Wrist pain",
            "orth": "Wrist pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1636",
            "name": "Joint pain, during wrist movement",
            "common_name": "Wrist pain while moving",
            "orth": "Pain when moving wrist",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_554",
            "name": "Pain in fingers or hand",
            "common_name": "Pain in fingers or hand",
            "orth": "Pain in fingers or hand",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1313",
            "name": "One finger pain",
            "common_name": "One finger pain",
            "orth": "One finger pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1312",
            "name": "Perionychial pain",
            "common_name": "Pain of the skin around the nail",
            "orth": "Pain of the skin around the nail",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1464",
            "name": "Edema, one hand",
            "common_name": "Hand swelling",
            "orth": "hand Swollen",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2093",
            "name": "Edema, both hands",
            "common_name": "Swelling of both hands",
            "orth": "Swollen hand",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1311",
            "name": "Edema, finger",
            "common_name": "Finger swelling",
            "orth": "Swollen finger",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1982",
            "name": "Dermatological changes, hands",
            "common_name": "Skin changes on hands",
            "orth": "Skin changes on hands",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_557",
            "name": "Erythema, hand",
            "common_name": "Red hand",
            "orth": "Red hand",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_553",
            "name": "Cyanosis, fingers",
            "common_name": "Pale or grayish-blue fingers",
            "orth": "Grayish - blue fingers",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1125",
            "name": "Erythema, palmar",
            "common_name": "Red skin on palms",
            "orth": "Red skin on palms",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_555",
            "name": "Tingling fingers",
            "common_name": "Tingling fingers",
            "orth": "Tingling fingers",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_87",
            "name": "Tremors, both hands",
            "common_name": "Trembling of both hands",
            "orth": "Trembling of both hands",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_86",
            "name": "Tremors, in one hand",
            "common_name": "Trembling of one hand",
            "orth": "Trembling of one hand",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_564",
            "name": "Loss of muscle mass, hands",
            "common_name": "Loss of muscles in hands",
            "orth": "Loss of muscles in hands",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_556",
            "name": "Cold hands or fingers",
            "common_name": "Cold hands or fingers",
            "orth": "Cold hands or fingers",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_250",
            "name": "Hand injury",
            "common_name": "Hand injury",
            "orth": "Hand injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));

    const [symptomsFeet, setSymptomsFeet] = useState([
        {
            "id": "s_578",
            "name": "Pain in one foot",
            "common_name": "Foot pain",
            "orth": "Foot pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1833",
            "name": "Toe pain",
            "common_name": "Toe pain",
            "orth": "Toe pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2005",
            "name": "Nail pain",
            "common_name": "Sore nail",
            "orth": "Sore nail",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1312",
            "name": "Perionychial pain",
            "common_name": "Pain of the skin around the nail",
            "orth": "Pain of the skin around the nail",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1621",
            "name": "Joint pain, ankle",
            "common_name": "Ankle pain",
            "orth": "Ankle pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_79",
            "name": "Joint pain, hallux",
            "common_name": "Big toe pain",
            "orth": "Big toe pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_125",
            "name": "Paresthesia in feet",
            "common_name": "Foot tingling or numbness",
            "orth": "Feet tingling",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_518",
            "name": "Paresthesia",
            "common_name": "Body tingling",
            "orth": "numbness",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1995",
            "name": "Edema, feet",
            "common_name": "Swollen feet",
            "orth": "Swollen feet",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1997",
            "name": "Edema, toe",
            "common_name": "Swollen toe",
            "orth": "Swollen toe",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1923",
            "name": "Dermatological changes, feet",
            "common_name": "Skin changes on feet",
            "orth": "Skin changes on feet",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_386",
            "name": "Thickened nails with pits or grooves",
            "common_name": "Thickened nails with pits or grooves",
            "orth": "Thickened nails",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1310",
            "name": "Brown nail discoloration",
            "common_name": "Brown nail discoloration",
            "orth": "Brown nail discoloration",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1788",
            "name": "White nail discoloration",
            "common_name": "White nail discoloration",
            "orth": "White nail discoloration",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1789",
            "name": "Yellow nail discoloration",
            "common_name": "Yellow nails",
            "orth": "Yellow nails",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2196",
            "name": "Cold feet and toes, unilateral",
            "common_name": "Cold foot",
            "orth": "Cold feet",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2088",
            "name": "Physical injury symptom",
            "common_name": "Injury",
            "orth": "injury",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2092",
            "name": "Pain in both feet",
            "common_name": "Feet pain",
            "orth": "Feet pain",
            "choice_id": "present",
            "type": "symptom"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));

    const [symptomsEyes, setSymptomsEyes] = useState([
        {
            "id": "s_493",
            "name": "Eye pain",
            "common_name": "Eye pain",
            "orth": "Eye pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_492",
            "name": "Red eye",
            "common_name": "Bloodshot eye",
            "orth": "Bloodshot eye",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_229",
            "name": "Erythema",
            "common_name": "Redness of skin",
            "orth": "Red",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_72",
            "name": "Red and stinging conjunctivae",
            "common_name": "Red and stinging eyes",
            "orth": "stinging eyes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1563",
            "name": "Itching of eyes",
            "common_name": "Itching of eyes",
            "orth": "Itchy eye",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_122",
            "name": "Excessive tear production",
            "common_name": "Watery eyes",
            "orth": "Watery eyes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1492",
            "name": "Scleral icterus",
            "common_name": "Yellow eyes",
            "orth": "Yellow eyes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_54",
            "name": "Pain near eye socket",
            "common_name": "Pain near eye socket",
            "orth": "Pain near eye socket",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_207",
            "name": "Diplopia",
            "common_name": "Double vision",
            "orth": "Double vision",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1465",
            "name": "Temporary blindness",
            "common_name": "Temporary blindness",
            "orth": "Temporary blindness",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_497",
            "name": "Anisocoria",
            "common_name": "Asymmetric pupils",
            "orth": "Asymmetric pupils",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_241",
            "name": "Dermatological changes",
            "common_name": "Skin changes",
            "orth": "Skin changes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_483",
            "name": "Dermatological changes, eyelid",
            "common_name": "Skin change on eyelid",
            "orth": "Skin changes on eyelid",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1442",
            "name": "Edema, periorbital",
            "common_name": "Swelling around the eyes",
            "orth": "Swelling around the eyes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_192",
            "name": "Blepharoptosis",
            "common_name": "Drooping eyelids",
            "orth": "Drooping eyelids",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_489",
            "name": "Dry discharge on eyelids",
            "common_name": "Dry discharge on eyelids",
            "orth": "Dry discharge on eyelids",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_606",
            "name": "Eye flashes",
            "common_name": "Eye flashes",
            "orth": "Eye flashes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_214",
            "name": "Serious eye injury",
            "common_name": "Serious eye injury",
            "orth": "Serious eye injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));

    const [symptomsLowerLegs, setSymptomsLowerLegs] = useState([
      {
          "id": "s_579",
          "name": "Pain in lower limb",
          "common_name": "Pain in lower limb",
          "orth": "Pain in lower limb",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1453",
          "name": "Pain in both lower limbs",
          "common_name": "Pain in both lower limbs",
          "orth": "Pain in both lower limbs",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1930",
          "name": "Pain in lower limb, severe",
          "common_name": "Severe pain in lower limb",
          "orth": "Severe pain in lower limb",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1620",
          "name": "Pain in lower limb, calf",
          "common_name": "Calf pain",
          "orth": "Calf Pain",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1835",
          "name": "Body aches",
          "common_name": "Body aches",
          "orth": "pain Pain",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_232",
          "name": "Pain in lower limb, calf, severe while walking",
          "common_name": "Severe calf pain while walking",
          "orth": "Severe calf pain while walking",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_581",
          "name": "Joint pain, knee",
          "common_name": "Knee pain",
          "orth": "Knee pain",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_173",
          "name": "Edema, one lower limb",
          "common_name": "Swollen leg",
          "orth": "Swollen leg",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_175",
          "name": "Edema, both lower limbs",
          "common_name": "Swollen legs",
          "orth": "Swollen legs",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_2001",
          "name": "Paresthesia, one lower limb",
          "common_name": "Numbness in one lower limb",
          "orth": "Numbness in one lower limb",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1063",
          "name": "Paresthesia, both lower limbs",
          "common_name": "Numbness of both lower limbs",
          "orth": "Numbness of both lower limbs",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "p_256",
          "name": "Lower limb injury",
          "common_name": "Leg injury",
          "orth": "leg injury",
          "choice_id": "present",
          "type": "risk_factor"
      },
      {
          "id": "s_117",
          "name": "Calf muscle spasms",
          "common_name": "Cramps in calves",
          "orth": "Cramps in calves",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_273",
          "name": "Heavy legs at the end of the day",
          "common_name": "Heavy legs at the end of the day",
          "orth": "Heavy legs at the end of the day",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_313",
          "name": "Sensory loss in one limb",
          "common_name": "Loss of feeling in only one arm or leg",
          "orth": "Loss of feeling in only one arm or leg",
          "choice_id": "present",
          "type": "symptom"
      }
  ].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
    const [symptomsNeck, setSymptomsNeck] = useState([
      {
          "id": "s_20",
          "name": "Pharyngeal pain",
          "common_name": "Sore throat",
          "orth": "Sore throat",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_509",
          "name": "Odynophagia",
          "common_name": "Painful swallowing",
          "orth": "Painful swallowing",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_962",
          "name": "Dysphagia",
          "common_name": "Difficulty swallowing",
          "orth": "Difficulty swallowing",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1367",
          "name": "Pharyngeal erythema",
          "common_name": "Red throat",
          "orth": "Red throat",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_102",
          "name": "Cough",
          "common_name": "Cough",
          "orth": "Cough",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1094",
          "name": "Clearing the throat",
          "common_name": "Hawking",
          "orth": "Hawking",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_474",
          "name": "Wheezing, audible",
          "common_name": "Whistling sound made while breathing",
          "orth": "Whistling sound made while breathing",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1471",
          "name": "Postnasal drip",
          "common_name": "Mucus dripping at the back of the throat",
          "orth": "Mucus dripping at the back of the throat",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_68",
          "name": "Dysphonia",
          "common_name": "Hoarse voice",
          "orth": "Hoarse voice",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_252",
          "name": "Itchy throat or nose",
          "common_name": "Itchy throat or nose",
          "orth": "Itchy nose",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_88",
          "name": "Dyspnea",
          "common_name": "Shortness of breath",
          "orth": "Shortness of breath",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1483",
          "name": "Neck pain",
          "common_name": "Neck pain",
          "orth": "Pain in neck",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_220",
          "name": "Enlarged lymph nodes",
          "common_name": "Enlarged lymph nodes",
          "orth": "Enlarged lymph nodes",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_363",
          "name": "Edema, neck",
          "common_name": "Swollen neck",
          "orth": "Swollen neck",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_418",
          "name": "Stiff neck",
          "common_name": "Stiff neck",
          "orth": "Stiff neck",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "p_240",
          "name": "Neck injury",
          "common_name": "Neck injury",
          "orth": "Neck injury",
          "choice_id": "present",
          "type": "risk_factor"
      }
  ].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
    const [symptomsNose, setSymptomsNose] = useState([
      {
          "id": "s_1996",
          "name": "Edema, nose",
          "common_name": "Swollen nose",
          "orth": "nose Swollen",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_107",
          "name": "Nasal catarrh",
          "common_name": "Runny nose",
          "orth": "Runny nose",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_331",
          "name": "Nasal congestion",
          "common_name": "Stuffy nose",
          "orth": "Stuffy nose",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_252",
          "name": "Itchy throat or nose",
          "common_name": "Itchy throat or nose",
          "orth": "Itchy nose",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1303",
          "name": "Nasal speech",
          "common_name": "Nasal voice",
          "orth": "Nasal voice",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_67",
          "name": "Snoring",
          "common_name": "Snoring",
          "orth": "Snoring",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_715",
          "name": "Sneeze",
          "common_name": "Sneeze",
          "orth": "Sneezing",
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
          "id": "s_1429",
          "name": "Nosebleeds",
          "common_name": "Bleeding from nose",
          "orth": "Bleeding from nose",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "s_1471",
          "name": "Postnasal drip",
          "common_name": "Mucus dripping at the back of the throat",
          "orth": "Mucus dripping at the back of the throat",
          "choice_id": "present",
          "type": "symptom"
      },
      {
          "id": "p_185",
          "name": "Nose injury",
          "common_name": "Nasal injury",
          "orth": "Nose injury",
          "choice_id": "present",
          "type": "risk_factor"
      }

  ].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
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
          <Nose choices={choices} setChoices={setChoices} symptomsNose={symptomsNose} setSymptomsNose={setSymptomsNose}></Nose>
          <Eyes choices={choices} setChoices={setChoices} symptomsEyes={symptomsEyes} setSymptomsEyes={setSymptomsEyes}></Eyes>
          <Mouth></Mouth>
          <Neck choices={choices} setChoices={setChoices} symptomsNeck={symptomsNeck} setSymptomsNeck={setSymptomsNeck}></Neck>
          <UpperArm></UpperArm>
          <UpperChest></UpperChest>
          <LowerArm></LowerArm>
          <UpperAbdomen></UpperAbdomen>
          <Boobs choices={choices} setChoices={setChoices} symptomsBoobs={symptomsBoobs} setSymptomsBoobs={setSymptomsBoobs}></Boobs>
          <Abdomen></Abdomen>
          <Hands choices={choices} setChoices={setChoices} symptomsHands={symptomsHands} setSymptomsHands={setSymptomsHands}></Hands>
          <Thighs></Thighs>
          <LowerAbdomen></LowerAbdomen>
          <Shit></Shit>
          <Knees></Knees>
          <LowerLegs choices={choices} setChoices={setChoices} symptomsLowerLegs={symptomsLowerLegs} setSymptomsLowerLegs={setSymptomsLowerLegs}></LowerLegs>
          <Feet choices={choices} setChoices={setChoices} symptomsFeet={symptomsFeet} setSymptomsFeet={setSymptomsFeet}></Feet>
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