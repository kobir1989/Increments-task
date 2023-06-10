import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import PricingDetails from '../../Molicules/PricingDetails/PricingDetails';
import { TabPanel } from './TabPanel';

const MuiTab = () => {
  const [value, setValue] = useState(0);
  //Tab handler
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered={true}
          sx={{
            '&	.MuiTabs-flexContainer': { justifyContent: 'space-around' },
          }}
        >
          <Tab label='Bronze' sx={{ textTransform: 'capitalize' }} />
          <Tab label='Silver' sx={{ textTransform: 'capitalize' }} />
          <Tab label='Gold' sx={{ textTransform: 'capitalize' }} />
          <Tab label='Platinum' sx={{ textTransform: 'capitalize' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PricingDetails
          packageName='Bronze'
          price='9.99'
          background='linear-gradient(134.9deg, #FEB66F 2.67%, #83501E 98.57%)'
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PricingDetails
          packageName='Silver'
          price='19.99'
          background='linear-gradient(137.19deg, #CCCCCC -10.74%, #121212 112.97%)'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PricingDetails
          packageName='Gold'
          price='29.99'
          background=' linear-gradient(132.06deg, #E6C72A -13.86%, #FE8C4C 100%)'
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PricingDetails
          packageName='Platinum'
          price='39.99'
          background='linear-gradient(132.06deg, #E6C72A -13.86%, #E5E4E2 -13.85%, #000000 100%)'
        />
      </TabPanel>
    </Box>
  );
};

export default MuiTab;
