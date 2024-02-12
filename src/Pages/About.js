import React from 'react';
import {Box,Typography} from '@mui/material';
import Layout from '../Components/Layout'
const About = () => {
  return (
    <Layout>
     <Box sx={{my:15,textAlign:"center",
       p:2,
     "& h4":{
      fontWeight:"bold",
      my:2,
      fontSize:"2rem",
     },
       "& p":{
        textAlign:"justify"
       },
       "@media (max-width:600px)":{
        mt:0,
       },
     }}>
      <Typography variant="h4">
         Welcome To My Resturant..!
      </Typography>
      <p>
      Vestibulum ut massa consequat, scelerisque risus non, varius leo. Aenean cursus lacus purus, sed imperdiet odio dignissim ac. Donec mauris massa, fringilla non elit eu, consectetur rhoncus odio. Donec tristique venenatis arcu at placerat. Vestibulum felis tortor, congue vel laoreet eu, laoreet vel tellus. Vivamus dignissim ornare lectus, et iaculis ante rutrum at. Duis placerat tortor a mauris ullamcorper fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius neque sit amet justo venenatis convallis. Maecenas dapibus, tellus at suscipit euismod, quam mauris congue nisi, et ornare magna urna ut nisl. Fusce placerat leo libero, in tempor leo sodales id. Integer aliquam vitae enim eu varius.
      </p>
      <br/>
      <p>
      Proin ac efficitur urna. Etiam eu aliquet dui. Nam pellentesque ligula eu sem pharetra congue. Donec non nibh luctus, fermentum enim vitae, congue neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas facilisis, dui rutrum pretium faucibus, neque risus suscipit arcu, nec suscipit est ipsum vel nulla. Suspendisse malesuada pretium suscipit. Sed nisi metus, dignissim sed dolor sed, facilisis tristique velit. Cras sit amet mauris scelerisque, vestibulum magna nec, convallis elit.Vestibulum ut massa consequat, scelerisque risus non, varius leo. Aenean cursus lacus purus, sed imperdiet odio dignissim ac. Donec mauris massa, fringilla non elit eu, consectetur rhoncus odio. Donec tristique venenatis arcu at placerat. Vestibulum felis tortor, congue vel laoreet eu, laoreet vel tellus. Vivamus dignissim ornare lectus, et iaculis ante rutrum at. Duis placerat tortor a mauris ullamcorper fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius neque sit amet justo venenatis convallis. Maecenas dapibus, tellus at suscipit euismod, quam mauris congue nisi, et ornare magna urna ut nisl. Fusce placerat leo libero, in tempor leo sodales id. Integer aliquam vitae enim eu varius.
      </p>
     </Box>
    </Layout>
  )
}

export default About
