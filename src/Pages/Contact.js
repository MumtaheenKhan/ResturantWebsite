import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Layout from "../Components/Layout";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography>Contact My Resturant</Typography>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Quisque blandit viverra ipsum, ut posuere
          mauris laoreet egestas. Vestibulum est orci, sollicitudin sit amet
          ultrices sed, sollicitudin sed nibh. Vestibulum dignissim tristique
          congue. Suspendisse potenti. Donec vel rhoncus ligula. Aliquam et
          aliquam nulla. Mauris tincidunt orci augue, eu efficitur diam
          vulputate quis.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-000
                  (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  help@myresturant.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +91 9860913172
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
