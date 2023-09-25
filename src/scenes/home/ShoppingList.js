import React, { useState } from 'react'
import Item from '../../components/Item'
import { Tabs, Tab, Box, useMediaQuery, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const ShoppingList = () => {
  const [value, setValue] = useState('all');
  const breakPoint = useMediaQuery("(min-width:600px)");
  const products = useSelector((state) => state.cart.items)
  
  const topRatedProducts = products.filter((product) => product.category === "topRated")
  const newArrivalProducts = products.filter((product) => product.category === "newArrivals")
  const bestSellerProducts = products.filter((product) => product.category === "bestSellers")

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  console.log(value)

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h2" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>

      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === 'all' && 
          products.map((product) => (
            <Item item={product} key={`${product.name}-${product.id}`}/>
          ))
        }
        {value === 'newArrivals' && 
          newArrivalProducts.map((product) => (
            <Item item={product} key={`${product.name}-${product.id}`}/>
          ))
        }
        {value === 'bestSellers' && 
          bestSellerProducts.map((product) => (
            <Item item={product} key={`${product.name}-${product.id}`}/>
          ))
        }
        {value === 'topRated' && 
          topRatedProducts.map((product) => (
            <Item item={product} key={`${product.name}-${product.id}`}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default ShoppingList