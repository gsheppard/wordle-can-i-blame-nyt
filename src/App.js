import * as React from 'react';
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Button,
} from '@mui/material'
import originalData from './data/original'
import currentData from './data/current'
import CompareTable from './components/CompareTable';
import TabPanel from './components/TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);
  const [showReason, setShowReason] = React.useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', flexGrow: 'column', flexDirection: 'column' }}>
      <Box>
        <Typography variant="h1" sx={{ backgroundColor: 'red', fontSize: { xs: 36, md: 64 }, my: { xs: 2, md: 4 } }}>
          Can I Blame NYT?
        </Typography>
        <Typography>
          <Button onClick={() => setShowReason(!showReason)}>
            {showReason ? 'Hide' : 'Show'} the Reason
          </Button>
        </Typography>
        {showReason && (
          <Box>
            <Typography sx={{ my: { xs: 1, md: 2 } }}>
              Ever since the acquisition of Wordle by the New York Times,
              people have been blaming NYT for words getting harder.
              This lets you know what changes NYT has made, and whether or not your rage is justified.
            </Typography>
            <Typography sx={{ color: '#bdbdbd', my: { xs: 1, md: 2 } }}>
              <em>Spoiler alert: it's not justified.</em>
            </Typography>
          </Box>
        )}
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Answers" {...a11yProps(0)} />
          <Tab label="Guessables" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <TabPanel value={value} index={0} sx={{ height: '100%' }}>
          <CompareTable
            original={originalData.answers}
            current={currentData.answers}
          />
        </TabPanel>
        <TabPanel value={value} index={1} sx={{ height: '100%' }}>
          <CompareTable
            original={originalData.guessables}
            current={currentData.guessables}
          />
        </TabPanel>
      </Box>
    </Container>
  );
}

export default App;
