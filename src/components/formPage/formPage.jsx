import './formPage.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
export default function FormPage({age, setAge, sexe, setSexe}){
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3)
        },
        '& .MuiInputBase-input': {
            height:40,
            width:500,
          borderRadius: 19,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '6px solid #B0DFF0',
          fontSize: 20,
          padding: '60px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          fontFamily: ['Montserrat'].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
          }
        }
      }));
      const handleChange = (event) => {
        setAge(parseInt(event.target.value, 10));
      };
      const handleChangeSexe = (event) => {
        setSexe(event.target.value);
      };
    return (
        <div className="form-page">
            <div className="upper-form-page">
            <ArrowBackIosIcon sx={{fontSize:110}}></ArrowBackIosIcon>
            <HomeIcon sx={{fontSize:120}} ></HomeIcon>
            </div>
            <div className="info-form">
                <h1>Please enter the following information to continue.</h1>
            </div>
          <div style={{
              display:'grid',
              placeItems:'center',
              padding:0,
              margin:0
          }}>

        <div className="form-container">
        <FormControl  variant='standard'>
        <InputLabel
          shrink={true}
          style={{ fontFamily: 'Poppins', fontSize: 20}}
          htmlFor='demo-customized-textbox'
        >
          Age
        </InputLabel>

        <BootstrapInput
          id='demo-customized-textbox'
          type='number'
          value={age}
          onChange={handleChange}
        />
      </FormControl>

     
        </div>
          </div>
        </div>
    )
}