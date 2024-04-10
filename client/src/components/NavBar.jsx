import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: "50vw",
        height: "180vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Home", "Map", "Creators"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="navbar">
      <nav className="menu-burger">
        <Button onClick={toggleDrawer(true)}>MENU</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </nav>
    </div>
  );
}

export default NavBar;