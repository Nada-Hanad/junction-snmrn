import { useState } from "react"

export default function Ears () {
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (<svg className='ears' fill="none" height="68" viewBox="0 0 148 68" width="148" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m143.268 67.084h-.397c-6.709-.1227-13.168-2.5322-18.279-6.8191-2.247-1.8699-4.225-4.0321-5.881-6.4271-2.223-3.1268-3.902-6.5969-4.968-10.2678-2.181-7.7806-1.663-16.0568 1.471-23.514 1.037-2.4367 2.372-4.7397 3.973-6.8583 1.442-1.9713 3.109-3.77282 4.967-5.36904 2.271-2.00282 4.845-3.64255 7.63-4.85956 3.88-1.71977 8.106-2.550473 12.358-2.429781h1.868l.993 11.756981v19.2031c-.597 11.9191-1.844 23.7977-3.735 35.5846zm-138.40355-66.623062 3.97369.313519c2.50766.387293 4.95266 1.098843 7.27186 2.116263 2.7919 1.22622 5.3779 2.86488 7.6692 4.85957 1.9362 1.69348 3.6695 3.60011 5.1658 5.68251 2.2267 3.2187 3.8921 6.7818 4.9274 10.5422 2.1269 7.4168 1.8068 15.3086-.914 22.5342-.984 2.7675-2.3192 5.4011-3.9737 7.838-1.6324 2.3079-3.5701 4.3904-5.7618 6.1921-2.5203 2.1028-5.3816 3.7722-8.464 4.9379-2.2455.8864-4.6196 1.4155-7.03339 1.5676-1.15237-4.5069-2.14579-9.0529-3.05974-13.5989-1.19211-5.9569-2.22525-11.7571-2.94052-17.7139-.736136-5.7089-1.173828-11.4513-1.311321-17.2045-.106383-4.9493.145921-9.89988.754991-14.81379l.55633-2.978444 2.34448-.195947z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}