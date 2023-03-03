import React, { useState } from "react";
import {
  Avatar,
  Box,
  CssBaseline,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MuiToolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import ClassIcon from "@mui/icons-material/Class";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssistantIcon from "@mui/icons-material/Assistant";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SourceIcon from "@mui/icons-material/Source";
import { NavLink, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { logout, selectCurrentUserType } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo.png";
import Notification from "./Notification";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: theme.palette.light.main,
  color: theme.palette.dark.main,
  backgroundColor: "white",
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Toolbar = styled(
  MuiToolbar,
  {}
)(({ theme }) => ({
  transition: theme.transitions.create(["margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));
const Drawer = styled(
  MuiDrawer,
  {}
)(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.light.main,
    position: "relative",
    borderRadius: "0px 40px 40px 0px",
    whiteSpace: "nowrap",
    width: drawerWidth,
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      // overflowX: "hidden",
      flexDirection: "column",
      display: "flex",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // border: "1px solid #C5BFBF",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f5f5f5",
  "&:hover": {
    backgroundColor: "#eeeeee",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const menuItemsStudent = [
  {
    path: "/trending",
    name: "Trending",
    icon: <TrendingUpRoundedIcon />,
    // icon: <EventIcon width={24} height={24} />,
  },
  {
    path: "/appointments",
    name: "Appointments",
    icon: <EventIcon />,
  },
  {
    path: "/myclasses",
    name: "My Classes",
    icon: <ClassIcon />,
  },
  {
    path: "/certificate",
    name: "Certificate",
    icon: <WorkspacePremiumIcon />,
  },
  {
    path: "/suggestion",
    name: "Suggestions",
    icon: <AssistantIcon />,
  },
  {
    path: "/library",
    name: "Library",
    icon: <LocalLibraryIcon />,
  },
  {
    path: "/forum",
    name: "Community Chat",
    icon: <ForumIcon />,
  },
];
const menuItemsTeacher = [
  {
    path: "/myclasses",
    name: "My Classes",
    icon: <ClassIcon />,
  },
  {
    path: "/appointments",
    name: "Appointments",
    icon: <EventIcon />,
  },

  {
    path: "/library",
    name: "Library",
    icon: <LocalLibraryIcon />,
  },
  // {
  //   path: "/forum",
  //   name: "Community Chat",
  //   icon: <ForumIcon />,
  // },
  {
    path: "/payment",
    name: "Payment",
    icon: <AttachMoneyIcon />,
  },
];
const menuItemsAdmin = [
  {
    path: "/earning",
    name: "Earning",
    icon: <CreditScoreIcon />,
  },
  {
    path: "/subscribers",
    name: "Subscribers",
    icon: <SubscriptionsIcon />,
  },
  // {
  //   path: "/platform",
  //   name: "Platform",
  //   icon: <LocalLibraryIcon />,
  // },
  {
    path: "/users",
    name: "User Management",
    icon: <ManageAccountsIcon />,
  },
  {
    path: "/contents",
    name: "Content Management",
    icon: <SourceIcon />,
  },
  {
    path: "/expenses",
    name: "Expense Management",
    icon: <ManageAccountsIcon />,
  },
];

const SideDrawer = ({ toggleDrawer, menuItem }) => (
  <>
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: [2],
        mt: {
          xs: 0,
          sm: 3,
        },
        py: [1],
        color: "#ffffff",
      }}
    >
      <IconButton
        onClick={toggleDrawer}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <MenuIcon
          sx={{
            color: "#fff",
            fontSize: "30px",
            display: { xs: "block" },
          }}
        />
      </IconButton>
      {/* <Typography
        sx={{
          color: "#fff",
          fontSize: "30px",
          display: { xs: "none", sm: "block" },
        }}
      >
        LOGO
      </Typography> */}
      <div
        style={{
          // marginTop: "-4vh",
          backgroundColor: "white",
          borderRadius: "50px",
          paddingLeft: "5vh",
          paddingTop: "1vh",
          width: "35%",
          marginLeft: "4vh",
        }}
      >
        <img src={Logo} alt="" style={{ width: "240%", marginLeft: "-112%" }} />
      </div>
    </Toolbar>
    <List
      style={{ paddingTop: "8px", paddingLeft: 0 }}
      component="nav"
      sx={{
        pl: 1,
        py: {
          xs: 2,
          sm: 3,
        },
      }}
    >
      {menuItem.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#fff",
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }
                : {
                    color: "#fff",
                    textDecoration: "none",
                  }
            }
          >
            <ListItemButton
              sx={{
                backgroundColor: "inherit",
                mb: 3,
                // flexDirection: "column",
                // ...(toggleopen && {
                //   display: "flex",
                //   flexDirection: "column",
                // }),
                // borderBottomLeftRadius: "30px",
                // borderTopLeftRadius: "30px",
                gap: 2,
                fontWeight: "bold",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  minWidth: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {item.icon}
              </ListItemIcon>{" "}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  sx: {
                    pl: 1,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    // whiteSpace: "initial",
                  },
                }}
              />
            </ListItemButton>
          </NavLink>
        );
      })}
    </List>
  </>
);
export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const [toggleopen, settoggleopen] = useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const userType = useSelector(selectCurrentUserType);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDrawer = () => {
    setOpen(!open);
    settoggleopen(!toggleopen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const settings = ["Profile", "Account", "Dashboard"];

  const menuItem =
    userType === "teacher"
      ? menuItemsTeacher
      : userType === "admin"
      ? menuItemsAdmin
      : userType === "student"
      ? menuItemsStudent
      : [];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#f5f5f5",
          position: "fixed",
          left: 0,
          zIndex: 10,
          width: "100%",
        }}
      >
        <CssBaseline />
        <AppBar
          position="absolute"
          sx={{ position: "fixed", top: 0, zIndex: 10, width: "100%" }}
        >
          <Toolbar
            sx={{
              ml: { xs: 0, sm: open ? 30 : 10 },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Stack
              direction="row"
              sx={{
                justifyContent: {
                  xs: "flex-end",
                  sm: "space-between",
                },
              }}
              alignItems="center"
              spacing={2}
              flexGrow={"1"}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ mr: 2, fontWeight: "bold" }}
                >
                  Welcome Back {userType}
                </Typography>
                <Typography>{format(new Date(), "MMMM dd, yyyy")}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Search sx={{ width: "48%", marginLeft: "-140px" }}>
                  <SearchIconWrapper>
                    <SearchIcon color="secondary" />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ width: "256px" }}
                  />
                </Search>
                {/* <IconButton color="inherit" sx={{ mr: 1 }}>
                  <NotificationsIcon color="secondary" />
                </IconButton> */}
                <Notification />
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Typography
                        component="h1"
                        variant="h6"
                        color={"#9D78BD"}
                        sx={{
                          width: "8ch",
                          paddingBottom: "1vh",
                          fontWeight: "bold",
                        }}
                      >
                        Akash
                      </Typography>
                      <ArrowDropDownIcon
                        sx={{ marginLeft: "-2vh", marginTop: "-6px" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <NavLink to="/profile" style={{ textDecoration: "none" }}>
                        <Typography color="secondary" sx={{ mr: 1 }}>
                          Profile
                        </Typography>
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <NavLink to="/account" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center">Account</Typography>
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <NavLink
                        to="/myclasses"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography textAlign="center">Dashboard</Typography>
                      </NavLink>
                    </MenuItem>
                    {/* {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))} */}
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            border: "none",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {<SideDrawer menuItem={menuItem} toggleDrawer={handleDrawerToggle} />}
        </Drawer>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            display: { sm: "block", xs: "none" },
            border: "none",
            height: "100vh",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              "&::-webkit-scrollbar": {
                width: "0",
              },
            },
          }}
        >
          {<SideDrawer menuItem={menuItem} toggleDrawer={toggleDrawer} />}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.light.main,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
