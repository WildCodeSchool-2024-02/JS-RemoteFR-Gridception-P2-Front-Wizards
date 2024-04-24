import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import tatoo from "../assets/tatoohp.png";

import logo from "../assets/logo3.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: "25vw",
        height: "180vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#E7DBC2",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <img className="tatoo" src={tatoo} alt="Death Eater tatoo" />
      <List className="link-container">
        {[
          <Link to="/" key={Link}>
            Home
          </Link>,
          <Link to="/Map" key={Link}>
            Map
          </Link>,
          "Creators",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <nav className="button-nav">
      <img src={logo} alt="logo" />
      <Button id="menu-burger" onClick={toggleDrawer(true)}>
        &#9776;
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </nav>
  );
}

export default NavBar;
