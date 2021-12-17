import { useState } from "react"

export default function Neck(){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return(<svg className='neck' fill="none" height="63" viewBox="0 0 96 63" width="96" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m82.3392.157362-.2384.979748c-.4371 2.82169-.7948 5.68256-1.0332 8.54343 0 2.07706-.2384 3.91896-.2781 6.19206-.0398 2.273 0 3.3311 0 5.0163.0949 9.5215 2.6672 18.8595 7.4705 27.1195 1.5698 2.4518 3.4088 4.7254 5.4837 6.7799l1.9073 1.5284-13.59 3.2527c-19.3978 3.6672-39.2658 4.2493-58.8502 1.7244-7.5938-1.0054-15.10849-2.5243-22.491042-4.546h-.476838l2.54317-1.9595c1.10444-1.0299 2.13978-2.1296 3.09947-3.292 5.36204-7.0366 8.67344-15.384 9.57654-24.1411.3848-2.9908.6103-5.9995.6756-9.0137 0-2.1946 0-4.3893 0-6.5839 0-2.19463-.3974-5.48661-.7153-8.22991l-.5563-2.978433 1.1921 1.058133c1.1126.74461 2.265 1.37164 3.4173 1.99868l3.6161 1.80276c3.97 1.88626 8.1239 3.37001 12.3979 4.42846 3.0519.80161 6.1829 1.27471 9.3381 1.41081h1.1127 1.9868c1.3235.0753 2.6502.0753 3.9737 0 4.1359-.3573 8.2237-1.1321 12.1992-2.31218 2.7816-.82299 5.5234-1.80273 8.2255-2.90005 1.2319-.50947 2.5034-1.01895 3.7353-1.64599 1.1871-.5916 2.3412-1.24571 3.4571-1.9595l2.8213-2.312216z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}