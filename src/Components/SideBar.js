import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import PersonIcon from '@mui/icons-material/Person';


export default function SideBar({ children }) {

    const menuitem = [
        {
            path: '/',
            name: "Home",
            icon: <HomeIcon />,

        },
        {
            path: '/Appoinment',
            name: "Appoinment",
            icon: <BookOnlineIcon />,

        },
        {
            path: '/Logout',
            name: "Logout",
            icon: <PersonIcon />,

        }
    ]

    const [color, setColor] = React.useState('neutral');

    const [isopen, setIsOpen] = React.useState(true);
    const toggle = () => setIsOpen(!isopen);

    return (


        
        <Box className='container' style={{ marginLeft: isopen ? "40px" : "0px" }}
        sx={{ display: 'flex', borderRadius: 'sm', overflow: 'auto' }}>
            <Sheet
                variant="solid"
                color="neutral"
                invertedColors
                style={{ width: isopen ? "200px" : "40px" }}
                sx={{
                    p: 2,
                    ...(color !== 'neutral' && {
                        bgcolor: `${color}.800`,
                    }),
                }}
            >

                <List

                    sx={{
                        '--ListItem-radius': '4px',
                        '--List-gap': '2px',
                        flexGrow: 0,
                        minWidth: 220,
                        height: "90vh",
                    }}
                >
                    {/* Static Div */}
                    <div className='Dashboard-div'>
                        <ListItemButton style={{ display: isopen ? "block" : "none" }}>
                            <ListItemDecorator  >
                                NOTE APP
                            </ListItemDecorator>
                        </ListItemButton>

                        <IconButton style={{ marginLeft: isopen ? "40px" : "0px" }} >
                            <MenuIcon onClick={toggle} />
                        </IconButton>

                    </div>

                    {/* Dynamic Div */}
                    {
                        menuitem.map(((item, index) =>
                            <NavLink to={item.path} key={index}>

                                <div className='Dashboard-div1' style={{ width: isopen ? "200px" : "40px" }} >
                                    <IconButton style={{ marginLeft: isopen ? "40px" : "0px" }}  >
                                       {item.icon}
                                        {/* <HomeIcon /> */}
                                    </IconButton>
                                    <ListItemButton style={{ display: isopen ? "block" : "none" }}>
                                        {item.name}
                                        {/* Home */}
                                    </ListItemButton>
                                </div>
                            </NavLink>))
                    }


                </List>
                <IconButton
                    variant="plain"
                    size="sm"
                    alignItems="center"
                    onClick={() => {
                        const colors = ['primary', 'neutral'];

                        const nextColor = colors.indexOf(color);
                        setColor(colors[nextColor + 1] ?? colors[0]);
                    }}
                    sx={{ mt: 'auto', height: '40px' }}
                >
                    <ColorLensRoundedIcon fontSize="large" />
                </IconButton>
            </Sheet>

                        <main className='content'> {children}</main>
        </Box>

    )
}
