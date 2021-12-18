import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@material-ui/core';

export default function ResultCard({ condition }) {
  return (
    <div className='result'>
      <div className='left-result'>
        <p style={{ fontSize: 60, fontFamily:'Poppins' }}>{condition?.name}</p>
        {condition?.name === condition?.common_name ? (
          <div style={{ margin: 0 }}></div>
        ) : (
          <p style={{ fontSize: 38,fontFamily:'Poppins' }}>Also known as {condition?.common_name}</p>
        )}
      </div>

      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          color: '#58cad9'
        }}
      >
        <CircularProgress
          variant='determinate'
          value={condition?.probability * 100}
          color='inherit'
          size={115}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant='caption' component='div' color='black'>
            <p style={{ fontSize: 56, fontFamily:'Poppins' }}>
              {Math.round(condition?.probability * 100)}
            </p>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
