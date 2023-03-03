import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { StyledTab } from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingBlock: 3,
            paddingLeft: {
              xs: 2,
              md: 0,
            },
            paddingRight: {
              xs: 2,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function CustomTab({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTab>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="tabs"
          sx={{
            paddingLeft: {
              xs: 2,
              md: 6,
            },
            // padding: {
            // md: "22px 98px",
            // xs: "22px 15px",
            // },
            borderRadius: "5px 0px 0px 5px",
            background: "#e8ecf7",
          }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          {tabs.map(({ label, icon }, i) => (
            <Tab
              label={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    >
                      {icon}
                    </span>
                    {label}
                  </Box>
                </>
              }
              key={i}
              className={`tab_label ${value === i ? "tab_active" : ""}`}
              sx={{
                whiteSpace: "nowrap",
                // width: {
                //   xs: "70%",
                //   sm: "50%",
                //   md: "40%",
                // },
                paddingX: {
                  xs: 5,
                  sm: 7,
                  md: 10,
                },
                height: "80%",
                paddingY: 2,
              }}
            />
          ))}
        </Tabs>
        {tabs.map(({ Component }, i) => (
          <TabPanel value={value} index={i} key={i}>
            {Component}
          </TabPanel>
        ))}
      </StyledTab>
    </>
  );
}
