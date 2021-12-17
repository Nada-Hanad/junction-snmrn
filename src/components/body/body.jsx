import './body.css'
import Abdomen from '../../assets/abdomen';
import Back from '../../assets/back';
import Boobs from '../../assets/boobs';
import Ears from '../../assets/ears';
import Eyes from '../../assets/eyes';
import Hands from '../../assets/hands';
import Head from '../../assets/head-F';
import Knees from '../../assets/knees';
import LowerAbdomen from '../../assets/lower-abdomen';
import LowerArm from '../../assets/lower-arm';
import LowerBack from '../../assets/lower-back';
import LowerLegs from '../../assets/lower-legs';
import Mouth from '../../assets/mouth';
import Neck from '../../assets/neck';
import Nose from '../../assets/nose';
import Shit from '../../assets/shit-F';
import Thighs from '../../assets/thighs';
import UpperAbdomen from '../../assets/upper-abdomen';
import UpperArm from '../../assets/upper-arm';
import UpperChest from '../../assets/upper-chest';
import Feet from '../../assets/feet';
import { useState } from 'react';

export default function Body (){
    const [turned, setTurned] = useState(false);

    return(
        <>
        {turned ? (
        <div className='body-part-back'>
          <Back></Back>
          <LowerBack></LowerBack>
        </div>
      ) : (
        <div className='body-part-front'>
          <Head></Head>
          <Ears></Ears>
          <Nose></Nose>
          <Eyes></Eyes>
          <Mouth></Mouth>
          <Neck></Neck>
          <UpperArm></UpperArm>
          <UpperChest></UpperChest>
          <LowerArm></LowerArm>
          <UpperAbdomen></UpperAbdomen>
          <Boobs></Boobs>
          <Abdomen></Abdomen>
          <Hands></Hands>
          <Thighs></Thighs>
          <LowerAbdomen></LowerAbdomen>
          <Shit></Shit>
          <Knees></Knees>
          <LowerLegs></LowerLegs>
          <Feet></Feet>
        </div>
      )}</>
    )
}