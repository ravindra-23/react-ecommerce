import React from 'react';
import { Box, Badge, IconButton, useTheme } from '@mui/material';
import { PersonOutline, MenuOutlined, ShoppingBagOutlined, SearchOutlined } from '@mui/icons-material';
import { shades } from '../../theme'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../state/cartSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)
  const { typography: { h3 } } = useTheme();
  
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
          fontSize={h3.fontSize}
          fontWeight="bold"
        >
          Myntra
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton size='large' sx={{ color: "black" }}>
            <SearchOutlined fontSize='inherit' />
          </IconButton>
          <IconButton size='large' sx={{ color: "black" }}>
            <PersonOutline fontSize='inherit' />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              size='large'
              sx={{ color: "black" }}
              onClick={() => dispatch(setIsCartOpen())}
            >
              <ShoppingBagOutlined fontSize='inherit' />
            </IconButton>
          </Badge>

          <IconButton size='large' sx={{ color: "black" }}>
            <MenuOutlined fontSize='inherit' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar