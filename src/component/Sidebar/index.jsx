import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ mode, setMode }) => {
  const [anchorElNav, setAnchortElNav] = useState(null);
  constt[(anchorElUser, setAnchorElUser)] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (e) => {
    setAnchortElNav(e.current.target);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.current.target);
  };
  const handleCloseNavMenu = () => {
    setAnchortElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MAS
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleOpenNavMenu}>
                <Typography textAlign="center" onClick={() => navigate("/")}>
                  DashBoard
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/Users")}
                >
                  Add_Users
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/Product")}
                >
                  Product
                </Typography>
              </MenuItem>
              <MenuItem>
                <Button
                  style={{ marginLeft: "auto" }}
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  color="inherit"
                >
                  {mode === "light" ? "dark" : "light"} Theme
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              DashBoard
            </Button>
            <Button
              onClick={() => navigate("/Users")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Add Users
            </Button>
            <Button
              onClick={() => navigate("/Product")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Product
            </Button>
            <Button
              style={{ marginLeft: "auto" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {mode === "light" ? "dark" : "light"} Theme
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Jiraiya Image"
                  src="https://upload.wikimedia.org/wikipedia/en/f/f2/JiraiyaNarutomanga.jpg"
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/Login")}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Sidebar;
