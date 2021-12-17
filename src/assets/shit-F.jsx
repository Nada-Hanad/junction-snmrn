import { useState } from "react"

export default function Shit (){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (<svg className="shit" fill="none" height="74" viewBox="0 0 64 74" width="64" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m32.3973.647406 6.3182.823014c2.6824.69742 5.2511 1.76616 7.6295 3.17439 7.3522 4.62446 12.7908 11.68359 15.3384 19.90849.7073 2.1893 1.2388 4.43 1.5895 6.7015 1.7499 10.7705-.7841 21.7915-7.0732 30.7642-.9046 1.235-1.8867 2.413-2.9405 3.5271-1.4033 1.4365-2.9325 2.748-4.5698 3.919-1.9376 1.3831-4.0311 2.5404-6.2387 3.4487l-2.4239.7446-.6755-3.919c-.2399-.9551-.6003-1.8768-1.0729-2.7433-.1698-.3305-.3693-.6452-.5961-.9405-.3179-.3919-.6755-.7447-.9536-1.1366-.2733-.2961-.5255-.6103-.7551-.9405-2.0201-2.8655-3.839-5.8641-5.4439-8.9745l-.2384.9014c-.6579 2.1405-1.5786 4.1936-2.7419 6.1136-.9934 1.646-2.1458 3.2136-3.1789 4.8204 0 .3135-.3974.627-.5563.9405-.1029.1582-.1832.3296-.2385.5095-.02.1823-.02.3663 0 .5486v.7839 2.0378 1.8812l-1.8676-.5879c-2.2075-.9083-4.301-2.0655-6.2387-3.4487-1.5366-1.1886-2.9719-2.4993-4.2915-3.919-1.0683-1.0984-2.0638-2.2635-2.98031-3.488-6.46046-9.0341-9.084375-20.2009-7.311597-31.1168.331727-2.2751.863567-4.5174 1.589477-6.7015 2.53491-8.2314 7.97663-15.29443 15.33843-19.90855 2.3749-1.41495 4.9446-2.48412 7.6295-3.17439l6.3181-.823013z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}