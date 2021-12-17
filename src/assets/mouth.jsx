import { useState } from "react"

export default function Mouth () {
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (<svg className="mouth" fill="none" height="39" viewBox="0 0 82 39" width="82" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2.26314 7.09435 2.10604-.86218c24.75582-8.45935 51.79452-7.69267 76.01662 2.15545l1.2318 2.27298-.5563 3.9191c-.9142 3.8194-2.6487 7.401-5.0863 10.5029-1.5855 1.9631-3.4608 3.6805-5.5632 5.0947-.9699.6352-1.9784 1.2111-3.02 1.7243l-2.7021 1.2149c-2.1458.9014-4.371 1.7244-6.5963 2.4298-2.922.9555-5.91 1.7021-8.9408 2.2338-2.6219.4688-5.2828.6919-7.9473.6663-.6211.0597-1.2466.0597-1.8677 0h-.5166c-.9262.0596-1.8553.0596-2.7815 0-1.0406-.0862-2.0754-.2302-3.0995-.4311-3.2526-.5536-6.4455-1.4064-9.5369-2.5474-4.0365-1.4751-7.9217-3.3253-11.6031-5.5258-.783-.4777-1.527-1.015-2.2253-1.6068-3.42513-3.011-5.95297-6.8861-7.31156-11.2083-.75292-2.1657-1.298388-4.3962-1.629229-6.6623v-.66624z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}