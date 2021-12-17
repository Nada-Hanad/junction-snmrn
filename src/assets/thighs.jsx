import { useState } from "react"

export default function Thighs(){
    const [symptoms, setSymptoms] = useState([
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
    ])
    return(<svg className="thighs" fill="none" height="299" viewBox="0 0 257 299" width="257" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m10.8226.805176h.2781c3.2982 1.214894 6.5566 2.508164 9.7753 3.919004 8.1606 3.48344 16.1201 7.40842 23.8421 11.75702 18.5599 10.3511 35.5598 23.2125 50.5055 38.2103-2.0243 6.3796-2.6355 13.1136-1.7922 19.7464.8432 6.6329 3.1212 13.0097 6.6796 18.699.916 1.4346 1.924 2.8091 3.02 4.1149 1.576 1.8745 3.333 3.5942 5.245 5.1342 2.62 2.178 5.553 3.961 8.703 5.29l3.219.941v2.116c0 1.019-.199 2.077-.358 3.135-.075.702-.208 1.397-.397 2.077-.075.293-.168.581-.279.863v.431l-.238.862c-.517 2.312-.954 4.624-1.391 6.976-.755 3.919-1.47 7.838-2.146 11.757-1.589 8.935-3.126 17.87-4.609 26.806-1.55 9.249-3.06 18.497-4.451 27.785-.596 3.919-1.152 7.838-1.669 11.757-.437 3.214-.874 6.428-1.192 9.641-.212 2.273-.371 4.546-.476 6.819-.239 3.58-.438 7.146-.597 10.699-.516 10.385-.953 20.771-1.39 31.156l-1.4309 36.956c-7.1694-4.996-15.2734-8.54-23.8421-10.424l-4.8081-1.019c-4.6219-.875-9.2927-1.477-13.9874-1.803-4.9274-.392-9.815-.509-14.7424-.431-8.8146.127-17.6074.899-26.3057 2.312v-3.174c-.159-3.449-.3974-6.898-.7153-10.346-1.2716-18.132-2.5961-36.251-3.9737-54.357-.6755-8.582-1.35104-17.126-2.18551-25.669 0-2.195-.43712-4.35-.67554-6.506l-.71526-7.289c-.91395-9.641-1.74841-19.282-2.58289-28.962-.83447-9.68-1.58948-19.869-2.30474-29.784-.51658-7.838-1.03316-15.323-1.43053-23.0046 0-3.0176-.27815-6.0353-.39736-9.0529 0-2.2338 0-4.4676 0-6.6623 0-2.9392.27815-5.8393.55631-8.7393.3179-3.919.755-7.838 1.1921-11.4435 1.15237-9.4448 2.46369-18.8505 3.97369-28.2561l4.72863-32.68443zm238.4214.940524 3.258 33.3508c1.192 13.4813 2.239 26.9758 3.139 40.4833 0 2.6257.358 5.2906.477 7.838v4.7419 13.2463 14.814c0 11.757 0 23.2-.437 34.801-.424 23.749-.993 47.511-1.709 71.286-.357 12.071-.755 24.18-1.033 36.251v4.742l.318 22.417c-3.614-1.339-7.319-2.426-11.087-3.253-6.945-1.596-14.048-2.437-21.179-2.508-5.323-.046-10.639.347-15.895 1.175-9.86 1.53-19.444 4.46-28.452 8.701l-7.947 4.271v-.392c-.834-6.309-1.629-12.58-2.424-18.889-.477-3.919-.993-8.269-1.391-12.423 0-1.294-.278-2.626-.397-3.919-.119-1.294 0-2.509-.318-3.919l-.358-3.214c-.556-4.938-1.271-9.876-1.986-14.814-.914-6.545-1.908-13.089-2.941-19.595-1.033-6.505-1.947-12.188-2.98-18.262-.636-3.919-1.272-7.447-2.027-11.13v-.902c-.715-3.057-1.47-6.113-2.185-9.131-3.656-15.676-7.325-31.43-11.007-47.263l-2.106-9.171c0-.431-.001-.901-.279-1.371l-1.033-11.209 3.537-1.058c5.341-2.248 10.046-5.745 13.709-10.1892 1.121-1.2957 2.144-2.671 3.06-4.1149 3.632-5.8011 5.924-12.3196 6.713-19.0927.79-6.7731.058-13.6347-2.144-20.0974 5.235-5.116 10.811-9.8817 16.69-14.2651 3.378-2.5082 6.755-4.938 10.252-7.2502 4.451-3.0176 9.02-5.8785 13.669-8.6218 6.809-3.9974 13.749-7.7205 20.823-11.1692 8.344-4.10187 16.874-7.79874 25.59-11.0907z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}