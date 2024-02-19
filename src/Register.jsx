
import React,{useState , NavLink} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios'
import Login from "./Login"
const Register = () => {
  const [value, setvalue] = useState({
    name:"",
    email:"",
    phone:"",
    Registration:"",
    branch:"",
    domain1:"",
    domain2:""

  })
   // console.log(value);
   const handleChange = (e) =>{
    setvalue({
      ...value,
      [e.target.name] : e.target.value
    })
  }
  let userCount = 0;
  const submitForm = async () => {
    try {
      const register = await axios.post("http://localhost:3000/", value); 
      console.log(register);
      alert('User registered successfully!');
      userCount++;
      console.log("total registered",userCount);
    //   setTimeout(() => {
    //     window.location.href="/Login";
    //   }, 2000);
    } catch (error) {
      console.log("Error registering user:", error);
    }
  };
  
 
   return (
    <>
    <div className="main">
    <div className="img">
    <img src="astranaut 1.png" alt="" width="100%"/>
    </div>
    <div className="form">
      <div className="child1">
      <img src="vssut.png" alt=""/>
      <div id="text">
        <p>Idea Innovation Cell</p>
        <p>Induction</p>
      </div>
      <img src="logo.png" alt="" />
      </div>
      <div className="child2">
      <Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Full Name"
                onChange={handleChange}
                value={value.name}
                name = "name"
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', 
                  },
                }}
              />
            </Box>
          </div>
          <div className="child2">
            <Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="E-mail"
                value={value.email}
                name = "email"
                onChange={handleChange}
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', 
                  },
                }}
              />
            </Box>
      </div>
      <div className="child2x">
      <div className="inner"><Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Phn no."
                value={value.phone}
                name = "phone"
                onChange={handleChange}
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', // Override the text color on focus
                  },
                }}
              /></Box></div>
      <div className="inner">
      <Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Registration No."
                value={value.registration}
                onChange={handleChange}
                name = "registration"
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', 
                  },
                }}
              /></Box>
      </div>
      </div>
      <div className="child2">
      <Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Branch"
                value={value.branch}
                name="branch"
                onChange={handleChange}
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', // Override the text color on focus
                  },
                }}
              />
            </Box>
          </div>
          <div className="child2x">
      <div className="inner"><Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Domain Prefernce 1"
                value={value.domain1}
                name = "domain1"
                onChange={handleChange}
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', // Override the text color on focus
                  },
                }}
              /></Box></div>
      <div className="inner">
      <Box
              component="form"
              sx={{
                width: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Domain Preference 2"
                value={value.domain2}
                onChange={handleChange}
                name = "domain2"
                variant="standard"
                sx={{
                  width: '100%',
                  height: '100%',
                  '& label': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: '2px solid white',
                    bottom: 0,
                  },
                  '& input:focus': {
                    color: 'white', 
                  },
                }}
              /></Box>
      </div>
      </div>
      <div className="child3" onClick={submitForm}>  Register </div>
      <h4>Already Registered ? <a href="#">sign in</a></h4>
    </div>
    </div>
    </>
  )
}

export default Register

