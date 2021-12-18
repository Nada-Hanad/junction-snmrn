import './body.css'
import AutorenewIcon from '@mui/icons-material/Autorenew';
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
export default function Body ({choices, setChoices}){
    const [turned, setTurned] = useState(false);


    const [symptomsShit, setSymptomsShit] = useState([
        {
            "id": "s_328",
            "name": "Abnormal vaginal discharge",
            "common_name": "Abnormal vaginal discharge",
            "orth": "Abnormal vaginal discharge",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_152",
            "name": "Bleeding after intercourse",
            "common_name": "Bleeding after intercourse",
            "orth": "Bleeding after intercourse",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_32",
            "name": "Painful intercourse",
            "common_name": "Painful sex",
            "orth": "Painful sex",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_59",
            "name": "Dysmenorrhea",
            "common_name": "Painful menstrual periods",
            "orth": "Painful periods",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_158",
            "name": "Heavy or prolonged menstrual periods",
            "common_name": "Heavy or prolonged menstrual periods",
            "orth": "Heavy periods",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1457",
            "name": "Amenorrhea",
            "common_name": "Absence of menstrual period",
            "orth": "Absence of menstrual period",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1440",
            "name": "Irregular menstruations",
            "common_name": "Irregular menstruations",
            "orth": "Irregular periods",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1999",
            "name": "Erythema, vulva",
            "common_name": "Redness of vulva",
            "orth": "Reddened vulva",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_215",
            "name": "Frequent urination",
            "common_name": "Frequent urination",
            "orth": "Frequent urination",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_39",
            "name": "Pain while urinating",
            "common_name": "Pain while urinating",
            "orth": "Pain while urinating",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_611",
            "name": "Dark urine",
            "common_name": "Dark urine",
            "orth": "Dark urine",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_113",
            "name": "Blood in urine",
            "common_name": "Blood in urine",
            "orth": "Red urine",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_153",
            "name": "Urinary incontinence",
            "common_name": "Urinary incontinence",
            "orth": "Urinary incontinence",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_182",
            "name": "Nocturia",
            "common_name": "Urinating at night",
            "orth": "urinating at night",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_75",
            "name": "Frequent urination, large quantities",
            "common_name": "Frequent urination in large quantities",
            "orth": "Often urinating",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_253",
            "name": "Itching in crotch",
            "common_name": "Genital itch",
            "orth": "Itching in crotch",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_690",
            "name": "Urinary urgency",
            "common_name": "Urgent need to urinate",
            "orth": "Urgent need to urinate",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_689",
            "name": "Urination in small amounts",
            "common_name": "Urination in small amounts",
            "orth": "Urination in small amounts",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1810",
            "name": "Dermatological changes, located in the genital area",
            "common_name": "Dermatological changes, located in the genital area",
            "orth": "Skin changes around genitals",
            "choice_id": "present",
            "type": "symptom"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));




    const [symptomsAbdomen, setSymptomsAbdomen] = useState([
        {
            "id": "s_17",
            "name": "Abdominal pain, premenstrual",
            "common_name": "Cramps before period",
            "orth": "Cramps before period",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_13",
            "name": "Abdominal pain",
            "common_name": "Stomach pain",
            "orth": "Stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1802",
            "name": "Abdominal pain, burning or gnawing",
            "common_name": "Burning or gnawing stomach pain",
            "orth": "Burning or gnawing stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1848",
            "name": "Abdominal pain, colicky",
            "common_name": "Colic stomach pain",
            "orth": "Colic stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1860",
            "name": "Abdominal pain, crampy",
            "common_name": "Crampy stomach pain",
            "orth": "Crampy stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1369",
            "name": "Abdominal pain, sharp and stabbing",
            "common_name": "Sharp and stabbing stomach pain",
            "orth": "Sharp and stabbing stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_241",
            "name": "Dermatological changes",
            "common_name": "Skin changes",
            "orth": "Lump",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_277",
            "name": "Increased abdominal girth",
            "common_name": "Increased abdominal size",
            "orth": "Increased abdominal size",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_309",
            "name": "Bloating",
            "common_name": "Bloating",
            "orth": "Bloating",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_329",
            "name": "Constipation",
            "common_name": "Constipation",
            "orth": "Constipation",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_8",
            "name": "Diarrhea",
            "common_name": "Diarrhea",
            "orth": "Diarrhea",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_305",
            "name": "Vomiting",
            "common_name": "Vomiting",
            "orth": "Vomiting",
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
            "id": "s_71",
            "name": "Black stools",
            "common_name": "Black stools",
            "orth": "Black stools",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_144",
            "name": "Abdominal injury",
            "common_name": "Recent abdominal injury",
            "orth": "Recent abdominal injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));


    const [symptomsLowerArm, setSymptomsLowerArm] = useState([
        {
            "id": "s_580",
            "name": "Pain in upper limb",
            "common_name": "Pain in upper limb",
            "orth": "Pain in upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1452",
            "name": "Pain in both upper limbs",
            "common_name": "Pain in both upper limbs",
            "orth": "Pain in forearm",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1935",
            "name": "Pain in upper limb, severe",
            "common_name": "Severe pain in upper limb",
            "orth": "Severe pain in upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1447",
            "name": "Edema, upper limb",
            "common_name": "Swelling of the upper limb",
            "orth": "Swelling of the upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1635",
            "name": "Edema, elbow joint",
            "common_name": "Elbow swelling",
            "orth": "Swollen elbow",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1431",
            "name": "Edema, wrist joint",
            "common_name": "Swollen wrist",
            "orth": "Swollen wrist",
            "choice_id": "present",
            "type": "symptom"
        },
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
            "id": "s_1632",
            "name": "Joint pain, elbow",
            "common_name": "Elbow pain",
            "orth": "Elbow pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1634",
            "name": "Joint pain, during elbow movement",
            "common_name": "Elbow pain while moving",
            "orth": "Pain when moving elbow",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_973",
            "name": "Paresthesia, both upper limbs",
            "common_name": "Numbness of both upper limbs",
            "orth": "Numbness of both upper limbs",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_972",
            "name": "Sensory loss in both arms",
            "common_name": "Loss of feeling in both arms",
            "orth": "Loss of feeling in both arms",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1426",
            "name": "Spasms in upper extremities",
            "common_name": "Spasms in upper extremities",
            "orth": "Spasms in upper extremities",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_252",
            "name": "Forearm injury",
            "common_name": "Forearm injury",
            "orth": "Forearm injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));


    const [symptomsUpperArm, setSymptomsUpperArm] = useState([
        {
            "id": "s_580",
            "name": "Pain in upper limb",
            "common_name": "Pain in upper limb",
            "orth": "Pain in upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1935",
            "name": "Pain in upper limb, severe",
            "common_name": "Severe pain in upper limb",
            "orth": "Severe pain in upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1654",
            "name": "Joint pain, shoulder",
            "common_name": "Shoulder pain",
            "orth": "Shoulder pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1805",
            "name": "Joint pain, during shoulder movement",
            "common_name": "Shoulder pain while moving",
            "orth": "Pain when moving shoulder",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1713",
            "name": "Restricted range of joint motion",
            "common_name": "Restricted range of joint motion",
            "orth": "Restricted range of joint motion",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1452",
            "name": "Pain in both upper limbs",
            "common_name": "Pain in both upper limbs",
            "orth": "Pain in both upper limbs",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1447",
            "name": "Edema, upper limb",
            "common_name": "Swelling of the upper limb",
            "orth": "Swelling of the upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1655",
            "name": "Edema, shoulder joint",
            "common_name": "Shoulder swelling",
            "orth": "Swollen shoulder",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1449",
            "name": "Paresthesia, one upper limb",
            "common_name": "Numbness of one upper limb",
            "orth": "Numbness of one upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_973",
            "name": "Paresthesia, both upper limbs",
            "common_name": "Numbness of both upper limbs",
            "orth": "Numbness of both upper limbs",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_972",
            "name": "Sensory loss in both arms",
            "common_name": "Loss of feeling in both arms",
            "orth": "Loss of feeling in both arms",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1426",
            "name": "Spasms in upper extremities",
            "common_name": "Spasms in upper extremities",
            "orth": "Spasms in upper extremities",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_254",
            "name": "Arm injury",
            "common_name": "Arm injury",
            "orth": "Arm injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));



    const [symptomsUpperChest, setSymptomsUpperChest] = useState([
        {
            "id": "s_50",
            "name": "Chest pain",
            "common_name": "Chest pain",
            "orth": "Chest pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_2074",
            "name": "Chest pain, radiating to left upper limb",
            "common_name": "Chest pain, spreading  to the left upper limb",
            "orth": "Chest pain spreading to left upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1925",
            "name": "Chest pain, pressure",
            "common_name": "Pressing chest pain",
            "orth": "Pressing chest pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_338",
            "name": "Heartburn",
            "common_name": "Heartburn",
            "orth": "Heartburn",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_110",
            "name": "Palpitations",
            "common_name": "Palpitations",
            "orth": "Palpitations",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_261",
            "name": "Tachycardia",
            "common_name": "Fast heartbeat",
            "orth": "Fast heartbeat",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_534",
            "name": "Bradycardia",
            "common_name": "Slow heart rate",
            "orth": "Slow heart rate",
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
            "id": "s_88",
            "name": "Dyspnea",
            "common_name": "Shortness of breath",
            "orth": "Shortness of breath",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1462",
            "name": "Shallow breathing",
            "common_name": "Shallow breathing",
            "orth": "Shallow breathing",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_227",
            "name": "Tachypnea",
            "common_name": "Accelerated breathing",
            "orth": "Accelerated breathing",
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
            "id": "p_136",
            "name": "Chest injury",
            "common_name": "Chest injury",
            "orth": "Chest injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));


    const [symptomsUpperAbdomen, setSymptomsUpperAbdomen] = useState([
        {
            "id": "s_13",
            "name": "Abdominal pain",
            "common_name": "Stomach pain",
            "orth": "Stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1387",
            "name": "Abdominal pain, epigastric",
            "common_name": "Upper central stomach pain",
            "orth": "Upper central stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1591",
            "name": "Abdominal pain, left upper quadrant",
            "common_name": "Upper left side stomach pain",
            "orth": "Upper left side stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1528",
            "name": "Abdominal pain, right upper quadrant",
            "common_name": "Upper right side stomach pain",
            "orth": "Upper right side stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1802",
            "name": "Abdominal pain, burning or gnawing",
            "common_name": "Burning or gnawing stomach pain",
            "orth": "Burning or gnawing stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1848",
            "name": "Abdominal pain, colicky",
            "common_name": "Colic stomach pain",
            "orth": "Colic stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1860",
            "name": "Abdominal pain, crampy",
            "common_name": "Crampy stomach pain",
            "orth": "Crampy stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1369",
            "name": "Abdominal pain, sharp and stabbing",
            "common_name": "Sharp and stabbing stomach pain",
            "orth": "Sharp and stabbing stomach pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_338",
            "name": "Heartburn",
            "common_name": "Heartburn",
            "orth": "Heartburn",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_241",
            "name": "Dermatological changes",
            "common_name": "Skin changes",
            "orth": "Lump",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_277",
            "name": "Increased abdominal girth",
            "common_name": "Increased abdominal size",
            "orth": "Increased abdominal size",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_309",
            "name": "Bloating",
            "common_name": "Bloating",
            "orth": "Bloating",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_305",
            "name": "Vomiting",
            "common_name": "Vomiting",
            "orth": "Vomiting",
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
            "id": "s_1432",
            "name": "Dyspepsia",
            "common_name": "Indigestion",
            "orth": "Indigestion",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_306",
            "name": "Hematemesis",
            "common_name": "Vomiting blood",
            "orth": "Vomiting blood",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_285",
            "name": "Weight loss",
            "common_name": "Weight reduction",
            "orth": "Weight loss",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_144",
            "name": "Abdominal injury",
            "common_name": "Recent abdominal injury",
            "orth": "Recent abdominal injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));

    const [symptomsThighs, setSymptomsThighs] = useState([
        {
            "id": "s_579",
            "name": "Pain in lower limb",
            "common_name": "Pain in lower limb",
            "orth": "Pain in lower limb",
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
            "id": "s_1893",
            "name": "Pain in lower limb, thigh",
            "common_name": "Thigh pain",
            "orth": "Thigh pain",
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
            "id": "s_11",
            "name": "Joint pain, hip",
            "common_name": "Joint pain, hip",
            "orth": "Hip pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_53",
            "name": "Back pain, lumbar",
            "common_name": "Lower-back pain",
            "orth": "Lower back pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1927",
            "name": "Limping due to pain",
            "common_name": "Limping due to pain",
            "orth": "Limping due to pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_734",
            "name": "Claudication in upper leg",
            "common_name": "Acute thigh or buttock pain appearing during exertion and relieving after short rest",
            "orth": "Acute thigh or buttock pain appearing during exertion and relieving after short rest",
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
            "id": "s_1652",
            "name": "Edema, hip joint",
            "common_name": "Hip swelling",
            "orth": "Hip swelling",
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
            "id": "s_73",
            "name": "Red stretch marks on abdomen, hips or thighs",
            "common_name": "Red stretch marks on abdomen, hips or thighs",
            "orth": "Red stretch marks on stomach",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_248",
            "name": "Thigh injury",
            "common_name": "Thigh injury",
            "orth": "injury thighs Thigh",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));


    const [symptomsMouth, setSymptomsMouth] = useState([
        {
            "id": "s_241",
            "name": "Dermatological changes",
            "common_name": "Skin changes",
            "orth": "Dermatological changes",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_65",
            "name": "Halitosis",
            "common_name": "Bad breath",
            "orth": "Bad breath",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_247",
            "name": "Dry mouth",
            "common_name": "Dry mouth",
            "orth": "Dry mouth",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_551",
            "name": "Toothache",
            "common_name": "Toothache",
            "orth": "Toothache",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_266",
            "name": "Difficulty biting and chewing",
            "common_name": "Difficulty biting and chewing",
            "orth": "Difficulty biting and chewing",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_19",
            "name": "Gum pain",
            "common_name": "Gum pain",
            "orth": "Gum pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_172",
            "name": "Swollen gums",
            "common_name": "Swollen gums",
            "orth": "Swollen gums",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_111",
            "name": "Bleeding gums",
            "common_name": "Bleeding gums",
            "orth": "Bleeding gums",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_607",
            "name": "Tongue erythema",
            "common_name": "Unusually red tongue",
            "orth": "Unusually red tongue",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_234",
            "name": "Burn",
            "common_name": "Burn",
            "orth": "Burning",
            "choice_id": "present",
            "type": "risk_factor"
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
            "id": "s_67",
            "name": "Snoring",
            "common_name": "Snoring",
            "orth": "Snoring",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_305",
            "name": "Vomiting",
            "common_name": "Vomiting",
            "orth": "Vomiting",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_116",
            "name": "Hemoptysis",
            "common_name": "Coughing up blood",
            "orth": "Coughing up blood",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_284",
            "name": "Diminished appetite",
            "common_name": "Diminished appetite",
            "orth": "Diminished appetite",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_310",
            "name": "Increased thirst",
            "common_name": "Increased thirst",
            "orth": "Increased thirst",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_610",
            "name": "Coated tonsils",
            "common_name": "White spots on tonsils",
            "orth": "White spots on tonsils",
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
            "id": "p_282",
            "name": "Lip injury",
            "common_name": "Lip injury",
            "orth": "Lip injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));
    const [symptomsKnees, setSymptomsKnees] = useState([
        {
            "id": "s_579",
            "name": "Pain in lower limb",
            "common_name": "Pain in lower limb",
            "orth": "Pain in lower limb",
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
            "id": "s_1453",
            "name": "Pain in both lower limbs",
            "common_name": "Pain in both lower limbs",
            "orth": "Pain in both lower limbs",
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
            "id": "s_575",
            "name": "Joint stiffness",
            "common_name": "Stiff joints",
            "orth": "Stiff joints",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1927",
            "name": "Limping due to pain",
            "common_name": "Limping due to pain",
            "orth": "Limping due to pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_170",
            "name": "Edema, knee joint",
            "common_name": "Swollen knee",
            "orth": "Swollen knee",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_238",
            "name": "Slower gait",
            "common_name": "Slower walk",
            "orth": "Slower walk",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_270",
            "name": "Creaking of joint during movement",
            "common_name": "Creaking of joint during movement",
            "orth": "Creaking joints",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_244",
            "name": "Knee injury",
            "common_name": "Knee injury",
            "orth": "Knee injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ].sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));

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
        <div className="body-container">
        
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
          <Mouth choices={choices} setChoices={setChoices} symptomsMouth={symptomsMouth} setSymptomsMouth={setSymptomsMouth}></Mouth>
          <Neck choices={choices} setChoices={setChoices} symptomsNeck={symptomsNeck} setSymptomsNeck={setSymptomsNeck}></Neck>
          <UpperArm choices={choices} setChoices={setChoices} symptomsUpperArm={symptomsUpperArm} setSymptomsUpperArm={setSymptomsUpperArm}></UpperArm>
          <UpperChest choices={choices} setChoices={setChoices} symptomsUpperChest={symptomsUpperChest} setSymptomsUpperChest={setSymptomsUpperChest}></UpperChest>
          <LowerArm choices={choices} setChoices={setChoices} symptomsLowerArm={symptomsLowerArm} setSymptomsLowerArm={setSymptomsLowerArm}></LowerArm>
          <UpperAbdomen choices={choices} setChoices={setChoices} symptomsUpperAbdomen={symptomsUpperAbdomen} setSymptomsUpperAbdomen={setSymptomsUpperAbdomen}></UpperAbdomen>
          <Boobs choices={choices} setChoices={setChoices} symptomsBoobs={symptomsBoobs} setSymptomsBoobs={setSymptomsBoobs}></Boobs>
          <Abdomen choices={choices} setChoices={setChoices} symptomsAbdomen={symptomsAbdomen} setSymptomsAbdomen={setSymptomsAbdomen}></Abdomen>
          <Hands choices={choices} setChoices={setChoices} symptomsHands={symptomsHands} setSymptomsHands={setSymptomsHands}></Hands>
          <Thighs choices={choices} setChoices={setChoices} symptomsThighs={symptomsThighs} setSymptomsThighs={setSymptomsThighs}></Thighs>
          <LowerAbdomen></LowerAbdomen>
          <Shit choices={choices} setChoices={setChoices} symptomsShit={symptomsShit} setSymptomsShit={setSymptomsShit}></Shit>
          <Knees choices={choices} setChoices={setChoices} symptomsKnees={symptomsKnees} setSymptomsKnees={setSymptomsKnees}></Knees>
          <LowerLegs choices={choices} setChoices={setChoices} symptomsLowerLegs={symptomsLowerLegs} setSymptomsLowerLegs={setSymptomsLowerLegs}></LowerLegs>
          <Feet choices={choices} setChoices={setChoices} symptomsFeet={symptomsFeet} setSymptomsFeet={setSymptomsFeet}></Feet>
        
        </div>

      )} 
  
   <AutorenewIcon onClick={()=>{setTurned(!turned)}} sx={{fontSize:100, color:'#6ba9d4'}}></AutorenewIcon>
 
      </div>
    )
}