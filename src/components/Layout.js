import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Box
        as="main"
        m={[" 0 0.5rem", null, null, null, null, "0 auto"]}
        maxW="1800px"
      >
        {children}
      </Box>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
