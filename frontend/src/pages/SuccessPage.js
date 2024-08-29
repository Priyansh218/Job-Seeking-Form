import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
      <Box
        sx={{
          border: "2px solid #4caf50",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#e8f5e9",
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Success!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your submission was successful.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for applying. We will review your application and get back to you soon.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHome}
          style={{ marginTop: "20px" }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Success;
