import React, { useState } from "react";
import {useNavigate} from "react-router-dom";    
import { Container, Grid2, TextField, MenuItem, Button, Box, Stack, Typography } from "@mui/material";
import { toast,Bounce } from 'react-toastify';

const SignUpForm = () => 
{
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      workExperience: "",
      position: "",
      customposition: "",
      workingMode: "",
      cv: null,
    });

  const firstNamecheck = (firstName)=>
  {
    const namePattern = /^[A-Za-z]+$/;
    if(!firstName.match(namePattern))
    {
       toast.error('Invalid First Name!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        return false;
    }
    return true;
  }

  const lastNamecheck = (lastName)=>
    {
      const namePattern = /^[A-Za-z]+$/;
      if(!lastName.match(namePattern))
      {
         toast.error('Invalid Last Name!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          return false;
      }
      return true;
    }

    const emailcheck = (email)=>
    {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email.match(emailPattern))
      {
         toast.error('Invalid Email!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          return false;
      }
      return true;
    }

    const phoneCheck = (phone)=>
    {
      const phonePattern = /^\d{10}$/;
      if(!phone.match(phonePattern))
      {
         toast.error('Invalid Phone Number!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          return false;
      }
      return true;
    }

    const zipCodeCheck = (zipCode)=>
    {
      const zipCodePattern = /^\d{5}$/
      if(!zipCode.match(zipCodePattern))
      {
         toast.error('Invalid zipCode !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          return false;
      }
      return true;
    }

    const addressCheck = (address) => {
      if(!address.length > 0 )
        {
          toast.error('Please Enter address !', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: false,
           draggable: true,
           progress: undefined,
           theme: "dark",
           transition: Bounce,
           });
           return false;
       }
       return true;
    };

    const positionCheck = (position, customPosition) => {
      if (position === "" && customPosition === "") {
        toast.error('Please select or enter a position to apply for!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return false;
      }
      return true;
    };

    const workingModeCheck = (mode) => {
      if(!mode.length > 0 )
        {
          toast.error('Please select working mode !', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: false,
           draggable: true,
           progress: undefined,
           theme: "dark",
           transition: Bounce,
           });
           return false;
       }
       return true;
    };

    const cvCheck = (cv) => {
      if (!cv) {
        toast.error('Please upload your CV!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return false;
      }
  
      const validExtensions = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validExtensions.includes(cv.type)) {
        toast.error('Invalid file type. Only PDF or Word documents are accepted!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return false;
      }
  
      return true;
    };
  
    
    

  const handleSubmit = async(e)=>
  {
    e.preventDefault();

    if(!firstNamecheck(formValues.firstName) | !lastNamecheck(formValues.lastName) | 
    !emailcheck(formValues.email) | !phoneCheck(formValues.phoneNumber) | !zipCodeCheck(formValues.zipCode) | 
    !addressCheck(formValues.address) | !positionCheck(formValues.position) |
    !workingModeCheck(formValues.workingMode) | !cvCheck(formValues.cv)
    )
    {
      return;
    }
    else {
      const formData = new FormData();
      for (const key in formValues) {
        formData.append(key, formValues[key]);
      }
  
      try {
        const response = await fetch('https://job-seeking-form-server1.vercel.app/api/users/signup', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          navigate("/success");
          // redirect to a success page
        } else {
          toast.error('Registration failed. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      } catch (error) {
        toast.error('Something went wrong. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }

  }

  const handleChange = (e) => 
  {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  const handleReset = (e) =>
  {
    setFormValues(
      {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        workExperience: "",
        position: "",
        customposition: "",
        workingMode: "",
        cv: null,
      }
    )
  }

  return (
    <Container style={{marginTop:"10px"}}>
      <Typography
      variant="h3"

      style={{textAlign:"center"}}>YourHr SignUp Form</Typography>  
      <form onSubmit={handleSubmit}>
        <Grid2 mt={4} container spacing={3}>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
            <TextField
              fullWidth
              label="First Name"
              placeholder="Enter First Name"
              variant="outlined"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
            <TextField
              fullWidth
              label="Last Name"
              placeholder="Enter Last Name"
              variant="outlined"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
            <TextField
              fullWidth
              label="Email Address"
              placeholder="Enter Email"
              type="email"
              variant="outlined"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:12, md:12, lg:12}}>
            <TextField
              fullWidth
              label="Address"
              placeholder="Enter Address"
              variant="outlined"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
            <TextField
              fullWidth
              label="Zip Code"
              placeholder="Enter Zip Code"
              variant="outlined"
              name="zipCode"
              value={formValues.zipCode}
              onChange={handleChange}
              
            />
          </Grid2>
          <Grid2 item size={{xs:12, sm:6, md:6, lg:6}}>
          <TextField
              fullWidth
              type="number"
              label="Work Experience"
              defaultValue=""
              variant="outlined"
              name="workExperience"
              value={formValues.workExperience}
              onChange={handleChange}
            >
            </TextField>
          </Grid2>
          <Grid2 item size={{xs:12, sm:12, md:6, lg:6}}>
            <TextField
              fullWidth
              select
              label="Position Applied For"
              defaultValue=""
              variant="outlined"
              name="position"
              value={formValues.position}
              onChange={handleChange}
            >
              <MenuItem value="Sales Associate">Sales Associate</MenuItem>
              <MenuItem value="Customer Service Associate">Customer Service Associate</MenuItem>
              <MenuItem value="Shift Manager">Shift Manager</MenuItem>
              <MenuItem value="Assistant Manager">Assistant Manager</MenuItem>
            </TextField>
          </Grid2>

          <Grid2 item size={{xs:12, sm:12, md:6, lg:6}}>
            <TextField
              fullWidth
              label="Or Enter Position"
              placeholder="Enter your desired position"
              variant="outlined"
              name="customPosition"
              value={formValues.customPosition}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 item size={{xs:12, sm:12, md:12, lg:12}}> 
            <TextField
              fullWidth
              select
              label="Preferred Working Mode"
              defaultValue=""
              variant="outlined"
              name="workingMode"
              value={formValues.workingMode}
              onChange={handleChange}
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 item xs={12}>
            <input
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              id="cv-upload"
              type="file"
              name="cv"
              onChange={handleChange}
            />
            <label htmlFor="cv-upload">
              <Button variant="contained" color="primary" component="span">
                Upload CV
              </Button>
            </label>
            {formValues.cv && (
              <Typography variant="body2" style={{ marginTop: '8px' }}>
                {formValues.cv.name}
              </Typography>
            )}
          </Grid2>
          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid2>
          <Grid2 item xs={12}>
            <Button onClick={handleReset} type="reset" variant="contained" color="primary" fullWidth>
              Reset
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
};

export default SignUpForm;
