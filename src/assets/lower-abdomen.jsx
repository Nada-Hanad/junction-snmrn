import { useState } from "react"

export default function LowerAbdomen(){
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
            "id": "s_1598",
            "name": "Abdominal pain, pelvic",
            "common_name": "Lower stomach pain",
            "orth": "Lower stomach pain",
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
            "id": "s_309",
            "name": "Bloating",
            "common_name": "Bloating",
            "orth": "Bloating",
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
            "id": "s_241",
            "name": "Dermatological changes",
            "common_name": "Skin changes",
            "orth": "Lump",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_641",
            "name": "Bowel incontinence",
            "common_name": "Loss of bowel control",
            "orth": "Loss of bowel control",
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
    return (<svg className='lower-abdomen' fill="none" height="84" viewBox="0 0 239 84" width="239" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m4.71031.689453 28.76949 2.468987c11.4972.94056 22.9944 1.77661 34.4916 2.50816 9.2189.58785 18.4776 1.13651 27.8158 1.52841 7.9478.35271 16.1728.62705 24.2788.62705 8.107 0 16.173-.27434 24.28-.62705 10.093-.43109 20.226-1.01891 30.319-1.68514 12.12-.7838 24.239-1.72437 36.359-2.70412l23.167-2.0379 1.152 6.42716c.397 2.82169.715 5.64339 1.033 8.50419.477 3.919.954 8.0732 1.391 12.149l.278 2.8608-7.192 2.7041c-6.716 2.7825-13.312 5.7218-19.869 8.8962-6.556 3.1744-13.272 6.7799-19.868 10.5421-5.298 3.0046-10.385 6.1789-15.259 9.5231-9.285 6.1854-18.055 13.0917-26.226 20.6532-.982-2.2425-2.165-4.3935-3.537-6.4272-.949-1.3795-1.998-2.6893-3.139-3.919-1.516-1.8637-3.221-3.5707-5.087-5.0947-2.497-1.9198-5.252-3.4892-8.185-4.6636-3.536-1.3703-7.289-2.1132-11.087-2.1946h-.954c-3.798.0781-7.552.8212-11.086 2.1946-3.017 1.1547-5.854 2.7248-8.4244 4.6636-1.9477 1.4834-3.7443 3.1503-5.3645 4.9772-1.1166 1.2399-2.1519 2.5489-3.0994 3.919-1.6127 2.2939-2.9464 4.7667-3.9737 7.3676-14.8631-14.738-31.6944-27.4086-50.0287-37.6615-7.8994-4.4669-16.0448-8.4966-24.3984-12.0705-3.29818-1.4109-6.63607-2.7433-9.97396-3.919l-1.112642-.3528 1.947112-14.0692c.35763-2.6257.67552-5.2906 1.03315-7.83797 0-.94056.27817-1.88113.39738-2.82169l.95367-4.389259z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}