import * as React from 'react';
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material'

const ListCard = ({ title, data, color }) => {
  const [isRevealed, setIsRevealed] = React.useState(false);

  return (
    <Grid xs={12} md={6} sx={{ display: 'flex' }}>
      <Card sx={{ width: '100%', mx: 2, mb: { xs: 1 } }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 28 }}>
            {title}
          </Typography>
          <Box sx={{ my: 2 }}>
            {isRevealed ? (
              <Box>
                {data.length
                  ? data.map(a => <Box key={title + a} sx={{ color }}>{a}</Box>)
                  : <Box sx={{ color: '#bdbdbd' }}><em>None</em></Box>
                }
              </Box>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => setIsRevealed(true)}>
                  Click to Reveal
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

function CompareTable({ original, current }) {
  const removals = original.filter(o => current.indexOf(o) < 0)
  const additions = current.filter(c => original.indexOf(c) <  0);

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
      <ListCard title={"Removed"} data={removals} color={'#f44336'} />
      <ListCard title={"Added"} data={additions} color={'#4caf50'} />
    </Grid>
  );
}

export default CompareTable;