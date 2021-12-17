import { useState } from "react"

export default function LowerArm(){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return (<svg className='lower-arm' fill="none" height="138" viewBox="0 0 491 138" width="491" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m444.83.963054.676 1.097326 1.708 2.93928c.13.21039.236.43371.318.66623.239.54866.437 1.13653.636 1.72438l1.113 3.25283c.993 2.9001 1.947 5.8393 2.9 8.7786 2.186 6.8192 4.252 13.6383 6.239 20.5358.517 1.8027.993 3.6447 1.51 5.4866.517 1.842.914 3.5664 1.431 5.3691.238.9014.476 1.842.755 2.7433 1.88 6.2444 3.96 12.4234 6.238 18.5371 1.669 4.5461 3.457 9.0922 5.285 13.5991s3.974 9.0529 5.762 13.5598c1.47 3.3705 2.941 6.7405 4.57 10.0325l6.119 11.757c-5.91 4.825-12.495 8.784-19.55 11.757-4.467 1.957-9.076 3.581-13.789 4.86l-1.669-4.311c-.492-1.022-1.063-2.004-1.708-2.939-.557-.862-1.232-1.646-1.828-2.469l-.477-.745-2.941-4.899-11.086-18.497-12.875-21.6335-33.856-57.4531 7.113-1.1365c4.773-.9648 9.483-2.208 14.107-3.7231 6.933-2.2211 13.596-5.1915 19.868-8.857 4.892-2.80819 9.383-6.24816 13.352-10.22871zm-400.1499.783796 2.5432 3.01768c6.1619 6.48047 13.4748 11.79347 21.5771 15.67617 8.4153 3.935 17.4681 6.3761 26.7429 7.211h1.4305l-11.9211 21.1236c-13.4707 24.1413-27.1005 48.2042-40.6507 72.3067-2.424 4.311-4.8479 8.661-7.2321 13.011l-.8345 1.685-6.9142-.666c-10.359-1.754-20.18894-5.771-28.769504-11.757h-.278161l2.543155-5.134 4.29158-9.053c1.11263-2.43 2.22527-4.86 3.29813-7.29 3.179-7.472 6.1592-15.0227 8.9408-22.6518 2.9008-7.838 5.6427-15.9896 7.9474-24.1412.5563-1.842 1.0729-3.9191 1.5895-5.6043l1.4305-5.369.9934-3.6056c2.0266-7.1718 4.2121-14.3436 6.5566-21.4371 1.351-3.919 2.7021-8.23 4.2121-12.26659.0885-.28059.1946-.55546.3179-.82299l1.9868-3.91904z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}