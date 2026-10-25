import React from "react";
import "../css/app.css";
import { Button, Container, Stack, Box, Typography } from "@mui/material";

function App() {
  return <Container maxWidth="sm">
    <Stack dir={"column"}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component={"h4"}>
          Create React app on TypeScript with REDUX
        </Typography>
      </Box>
      <Button variant="contained">Contained</Button>
    </Stack>

  </Container>
}

export default App;





