import { useState } from "react"

export default function Eyes() {
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (
        <svg className="eyes" fill="none" height="29" viewBox="0 0 85 29" width="85" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m17.6876.897461c9.5368 0 17.2855 6.192059 17.2855 13.794939 0 7.6029-7.9474 13.7558-17.2855 13.7558-9.33819 0-17.325295-6.1921-17.325295-13.7558 0-7.56369 7.748685-13.794939 17.325295-13.794939zm49.075 0c9.8945 0 17.9213 6.113679 17.9213 13.638239 0 7.5245-8.0268 13.5206-17.8418 13.5206s-17.8816-6.0745-17.8816-13.599c0-7.52454 7.9474-13.559839 17.8816-13.559839z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>
    )
}