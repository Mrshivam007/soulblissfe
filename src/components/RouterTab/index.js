import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";

const RouterTab = ({ tabs = [] }) => {
  return (
    <Box>
      <Tabs
        value={false}
        variant="scrollable"
        aria-label="tabs"
        sx={{
          paddingLeft: {
            xs: 2,
            md: 6,
          },
          borderRadius: "5px 0px 0px 5px",
          background: "#e8ecf7",
          "& .MuiTabs-scrollButtons": {
            marginTop: "20px",
          },
        }}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        {tabs.map(({ label, icon, href, matchparent = false }, i) => (
          <Tab
            component={NavLink}
            to={href}
            end={!matchparent}
            // @ts-ignore
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    backgroundColor: "#fff",
                  }
                : {
                    textDecoration: "none",
                  }
            }
            label={
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-around",
                  alignItems: "center",
                  color: "#9d78bd",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    color: "#9d78bd",
                  }}
                >
                  {icon}
                </span>
                {label}
              </Box>
            }
            key={i}
            sx={{
              paddingY: 2,
              fontSize: "15px",
              fontWeight: "700",
              opacity: 1,
              backgroundColor: "inherit",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              height: "80%",
              borderRadius: "5px 5px 0px 0px",
              marginTop: "20px",
              // width: {
              //   xs: "60%",
              //   sm: "45%",
              //   md: "30%",
              // },
              paddingX: {
                xs: 5,
                sm: 7,
                md: 10,
              },
              border: "none",
            }}
          />
        ))}
      </Tabs>
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
        <Outlet />
      </Box>
    </Box>
  );
};

export default RouterTab;
