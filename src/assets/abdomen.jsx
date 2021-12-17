import { useState } from "react"

export default function Abdomen(){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return(<svg className='abdomen' fill="none" height="111" viewBox="0 0 229 111" width="229" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m201.812 1.17092v.23513c0 1.45004-.278 2.97844-.398 4.46766-.457 6.26229-.457 12.54889 0 18.81119.19 3.0756.561 6.1376 1.113 9.1705.472 2.6676 1.177 5.29 2.106 7.838.345.9797.757 1.9355 1.232 2.8609l1.589 3.0176c4.993 9.6426 9.385 19.576 13.153 29.7452 3.275 8.6229 5.931 17.4625 7.948 26.4529l-27.141 2.352c-11.497.914-22.968 1.75-34.412 2.508-9.219.575-18.491 1.071-27.816 1.489-7.947.353-15.894.627-24.08.627-7.232 0-14.464-.235-21.6963-.509-8.3448-.34-16.663-.771-24.9548-1.294-21.9744-1.371-43.9092-3.135-65.84391-5.055l-1.986844-.196c1.410764-6.7668 3.242104-13.4418 5.483674-19.9869 2.89201-8.5837 6.24798-17.0086 10.05338-25.2384 1.8677-3.919 3.9737-8.0731 5.9208-12.0313l.8742-1.6068c.1083-.2977.2412-.586.3974-.8622.7982-2.0715 1.345-4.2289 1.6292-6.4271.2578-2.2377.3772-4.4888.3576-6.7407 0-3.3704.0001-6.7407-.5165-10.111-.5166-3.3704-.7153-7.3286-1.0729-11.01245 0-2.27302-.3577-4.54603-.5961-6.81905v-1.84194z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}