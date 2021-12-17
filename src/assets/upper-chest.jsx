import { useState } from "react"

export default function UpperChest(){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (<svg className='upper-chest' fill="none" height="121" viewBox="0 0 260 121" width="260" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m186.632.197754c2.309 1.502726 4.742 2.813566 7.271 3.919006 2.379 1.03813 4.821 1.92818 7.312 2.66492l.715.27433c2.782.88952 5.642 1.51933 8.544 1.88112 4.482.52841 9.001.68573 13.51.47029l3.179-.23514h2.623c2.361-.16309 4.732-.0711 7.073.27433 6.958 1.20789 13.492 4.13349 18.994 8.50429l3.497 2.9392c-7.923 8.4545-14.452 18.0814-19.352 28.5304-1.112 2.273-2.146 4.6244-3.139 6.9366s-2.345 5.8393-3.378 8.7786c-1.311 3.6446-2.463 7.3677-3.536 11.0907-1.629 5.8002-2.981 11.7571-3.974 17.5572-.397 2.0379-.715 3.919-.993 6.0744-4.078-5.1251-9.264-9.2889-15.18-12.1881-5.686-2.9316-11.983-4.5277-18.398-4.6636h-1.113c-1.708 0-3.417 0-5.086.3527-5.018.7135-9.896 2.1805-14.464 4.3501-5.456 2.5362-10.408 6.0134-14.623 10.2678-3.24 3.1891-5.925 6.8841-7.948 10.9341-1.475 2.953-2.48 6.112-2.98 9.366v1.842h-30.081v-1.842c-.475-3.292-1.467-6.492-2.94-9.484-2.032-4.044-4.716-7.737-7.948-10.9337-4.215-4.2543-9.1671-7.7316-14.6228-10.2678-4.6303-2.1887-9.5766-3.6562-14.6629-4.3501-1.6689 0-3.3776-.3135-5.0863-.3526-1.8725-.0128-3.7439.0919-5.6029.3135-2.6986.3247-5.3597.9021-7.9474 1.7243-2.3741.7638-4.6746 1.7343-6.8744 2.9001-5.4918 2.9082-10.3095 6.9121-14.1463 11.757 0-1.5676-.159-3.1352-.4769-4.7028-.751-6.0217-1.9462-11.9813-3.5763-17.8315-4.3911-16.2333-11.8609-31.4992-22.01421-44.9901-2.74731-3.689-5.71982-7.2096-8.901048-10.5422 1.271578-1.1757 2.582898-2.3122 3.973688-3.3703 5.07847-4.0825 11.02907-6.9767 17.40477-8.46505 2.4141-.521 4.8802-.77081 7.3513-.74462 1.7484 0 3.4968.23514 5.2452.35271h2.3842c6.0958.32847 12.2093-.09279 18.1995-1.25408 1.4119-.28255 2.8053-.64899 4.1724-1.09731h.4768l.9934-.27433c4.8005-1.48627 9.3628-3.63705 13.5503-6.387984l5.3645 1.763554c7.5679 2.19057 15.2826 3.85372 23.0874 4.97714 20.707 2.9295 41.763 2.43947 62.307-1.45003 7.365-1.40027 14.647-3.19258 21.816-5.369046z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}