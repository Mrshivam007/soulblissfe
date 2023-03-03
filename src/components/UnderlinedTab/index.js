import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function a11yProps(index) {
  return {
    id: `tab-name-${index}`,
    "aria-controls": `tab-name-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

const UnderlinedTab = ({ tabs, addStyle = {} }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            ...addStyle,
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
              }}
              label={<Box px={1}>{tab.label}</Box>}
              {...a11yProps(tab.label.split(" ").join("-").toLowerCase())}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
};

export default UnderlinedTab;
