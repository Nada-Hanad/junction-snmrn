import { useState } from "react"

export default function Knees (){
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
            "id": "s_1453",
            "name": "Pain in both lower limbs",
            "common_name": "Pain in both lower limbs",
            "orth": "Pain in both lower limbs",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_581",
            "name": "Joint pain, knee",
            "common_name": "Knee pain",
            "orth": "Knee pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_575",
            "name": "Joint stiffness",
            "common_name": "Stiff joints",
            "orth": "Stiff joints",
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
            "id": "s_170",
            "name": "Edema, knee joint",
            "common_name": "Swollen knee",
            "orth": "Swollen knee",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_238",
            "name": "Slower gait",
            "common_name": "Slower walk",
            "orth": "Slower walk",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_270",
            "name": "Creaking of joint during movement",
            "common_name": "Creaking of joint during movement",
            "orth": "Creaking joints",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_244",
            "name": "Knee injury",
            "common_name": "Knee injury",
            "orth": "Knee injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ])
    return(<svg className='knees' fill="none" height="93" viewBox="0 0 254 93" width="254" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m6.90891 7.5371 10.56999-1.25405c4.8876-.47028 9.7753-.78384 14.7026-.90141h11.1661c3.6955 0 6.2784.39191 9.4176.74462 3.8318.43278 7.6384 1.06065 11.4045 1.8811 2.0266.47028 3.9737.97977 6.0003 1.60681 7.2214 2.03783 13.9703 5.44573 19.8684 10.03263l-.2384 5.5258c0 3.6447-.2385 7.3286-.6358 10.9733-.6002 5.605-1.7853 11.134-3.5366 16.499-1.04 3.0012-2.2744 5.9334-3.6955 8.7785-.5299 1.019-1.0862 2.0379-1.669 3.0568-.5166.9014-1.0331 1.8028-1.51 2.7042l-.7152 1.5284c-.7342 1.4868-1.3713 3.0183-1.9074 4.5852-.8477 2.5635-1.5116 5.1827-1.9869 7.838-.5165 2.8217-.9536 5.6826-1.2715 8.5827v3.096c-9.868-.6261-19.6724-2.0018-29.3258-4.115-9.44-1.9744-18.6337-4.9574-27.4184-8.8961-5.4544-2.3834-10.60313-5.3959-15.338471-8.9745l2.622631-11.13c1.27158-6.2313 2.30474-12.5016 2.94053-18.8112.43711-3.919.63579-7.838.755-12.0706.11921-4.2325 0-8.3475 0-12.5408l-.35763-8.7394zm153.74209 7.838 11.245-5.87849c8.076-3.59506 16.602-6.11234 25.352-7.48532 13.058-2.0009981 26.398-1.253003 39.141 2.19469l8.345 2.6649v9.52322c0 4.4285.358 8.8569.596 13.2462.199 3.096.437 6.192.795 9.2488 0 1.842.477 3.919.755 5.565 1.157 6.6302 2.763 13.1766 4.808 19.5951l1.629 4.7811-1.192.9406c-14.177 8.872-30.262 14.3479-46.969 15.9896-6.831.7833-13.709 1.0975-20.584.9405l-3.139-.1959-1.47-5.1731c-2.633-6.8259-5.713-13.4761-9.219-19.9086l-.715-1.5675c-.848-1.7244-1.603-3.488-2.265-5.2907-1.699-4.4185-3.028-8.9667-3.974-13.599-.755-3.6568-1.233-7.364-1.431-11.0908 0-.6662 0-1.2932-.238-1.9203l-.715-5.2122-.954-7.2894z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}