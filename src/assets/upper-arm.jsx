import { useState } from "react"

export default function UpperArm () {
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
            "id": "s_1935",
            "name": "Pain in upper limb, severe",
            "common_name": "Severe pain in upper limb",
            "orth": "Severe pain in upper limb",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1654",
            "name": "Joint pain, shoulder",
            "common_name": "Shoulder pain",
            "orth": "Shoulder pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1805",
            "name": "Joint pain, during shoulder movement",
            "common_name": "Shoulder pain while moving",
            "orth": "Pain when moving shoulder",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1713",
            "name": "Restricted range of joint motion",
            "common_name": "Restricted range of joint motion",
            "orth": "Restricted range of joint motion",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1452",
            "name": "Pain in both upper limbs",
            "common_name": "Pain in both upper limbs",
            "orth": "Pain in both upper limbs",
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
            "id": "s_1655",
            "name": "Edema, shoulder joint",
            "common_name": "Shoulder swelling",
            "orth": "Swollen shoulder",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1449",
            "name": "Paresthesia, one upper limb",
            "common_name": "Numbness of one upper limb",
            "orth": "Numbness of one upper limb",
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
            "id": "p_254",
            "name": "Arm injury",
            "common_name": "Arm injury",
            "orth": "Arm injury",
            "choice_id": "present",
            "type": "risk_factor"
        }
    ])
    return(<svg  className='upper-arm' fill="none" height="238" viewBox="0 0 396 238" width="396" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m63.5636 1.22105c3.0142 3.16752 5.8402 6.50424 8.4639 9.99345 9.6878 12.8675 16.8817 27.3895 21.2195 42.8349 1.4698 5.1451 2.585 10.3824 3.3379 15.676.6237 4.0225.9821 8.0807 1.0729 12.1489-.755 1.2933-1.4703 2.5866-2.106 3.9191-1.5326 3.3235-2.6277 6.8268-3.2585 10.4245-.6228 3.6373-.7697 7.3381-.4371 11.0121.4765 5.047 1.8202 9.977 3.9737 14.579 0 2.038-.2781 3.919-.5563 6.075l-.5563 2.273-12.9542 29.823c-3.7353 8.583-7.3513 17.205-10.9277 25.866-1.1126 2.612-2.1855 5.317-3.2187 8.112-.3973 1.019-.7549 1.999-1.1126 3.018-.3576 1.019-.4371 1.254-.6358 1.92.015.261.015.523 0 .784.0191.326.0191.653 0 .98l-.3576 1.763c-.755 3.488-1.5895 6.976-2.4637 10.464s-1.51 5.918-2.3842 8.857c.0225.169.0225.34 0 .509-.2782.745-.6358 1.45-.9537 2.195l-1.6689 3.253c-1.669 3.213-3.4174 6.427-5.1261 9.601l-.3179.549h-1.9471c-9.1836-.661-18.1602-3.014-26.4647-6.937-7.4343-3.579-14.1623-8.436-19.86843-14.343l-3.973685-4.546 10.172615-19.595c2.8876-5.644 5.7751-11.313 8.6626-17.009 1.5498-3.135 3.1393-6.27 4.6095-9.445l.3974-.862c1.1523-2.782 2.1458-5.643 3.0597-8.504.914-2.861 1.9869-6.114 2.9008-9.171 2.3445-7.838 4.5697-15.676 6.6758-23.514 1.5895-5.996 3.1789-12.031 4.6889-18.066.7153-2.822 1.3908-5.644 2.0266-8.5046.6358-2.8608 1.2716-6.3096 1.669-9.5232.5563-4.5068.7947-9.0137.9537-13.5205.1986-5.0948.2781-10.1895.3178-15.2842 0-2.3514 0-4.6636 0-7.015.1182-4.6666.5965-9.3175 1.4306-13.9125 1.6824-8.996 4.7653-17.6813 9.1394-25.748 1.2716-2.273 2.6624-4.546 3.9737-6.70146zm264.5674-.705425.636.627045c1.186 1.27181 2.3 2.60625 3.338 3.99739 1.436 2.16773 2.762 4.40431 3.974 6.70154 4.487 8.2684 7.625 17.1824 9.298 26.4141.795 4.6243 1.233 9.3013 1.312 13.9909v8.857c0 5.3298 0 10.6989.437 16.0679 0 3.919.477 8.0732 1.073 12.1098.357 2.5473.874 5.0555 1.43 7.5637.755 3.488 1.59 6.897 2.464 10.346 1.828 7.172 3.695 14.344 5.682 21.476 1.987 7.133 3.974 14.697 6.318 21.986.875 2.822 1.788 5.683 2.782 8.504.755 2.156 1.51 4.311 2.464 6.388.556 1.176 1.112 2.312 1.708 3.449s1.788 3.331 2.663 4.977c2.106 3.919 4.251 7.485 6.397 11.209l15.498 26.179c-7.67 7.51-16.847 13.357-26.942 17.165-1.775.653-3.563 1.28-5.364 1.881-2.226.745-4.451 1.372-6.716 1.959-2.94.784-5.921 1.45-8.941 2.038l-6.517.823-4.371-7.407c-1.03-1.939-1.933-3.942-2.702-5.996-1.206-3.045-2.175-6.176-2.901-9.366-.198-.941-.357-1.881-.516-2.822l-.239-1.842c0-.352 0-.705 0-1.019-.397-1.567-.834-3.057-1.351-4.585-.516-1.528-1.152-3.37-1.788-5.055-1.708-4.625-3.536-9.21-5.404-13.756-3.815-9.171-7.788-18.315-11.921-27.433-1.788-3.919-3.616-8.073-5.404-12.149l-2.543-6.036-4.928-11.757-.715-3.292c2.304-4.935 3.652-10.252 3.974-15.676.258-3.507.098-7.032-.477-10.5026-.631-3.5977-1.726-7.101-3.259-10.4245-.702-1.4901-1.485-2.9422-2.344-4.3501v-.4703c.477-3.919 1.152-8.1907 1.947-12.2665 1.033-5.2123 2.265-10.4246 3.974-15.6761.953-3.3703 2.026-6.7015 3.179-9.9935 3.373-9.703 7.824-19.0084 13.272-27.7466 3.405-5.4063 7.402-10.42669 11.921-14.970609z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>)
}