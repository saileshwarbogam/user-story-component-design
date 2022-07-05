import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import '../../App.css';
import { Box, Select } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, SelectChangeEvent, Typography } from '@mui/material';

import zeroTwoTwentyFiveMale from '../../../src/assets/Male/0-25Male.png'
import twentyFiveToFiftyMale from '../../../src/assets/Male/25-50Male.png'
import fiftyMale from '../../../src/assets/Male/50Male.png'

import zeroTwoTwentyFiveFemale from '../../../src/assets/Female/0-25Female.png'
import twentyFiveToFiftyFemale from '../../../src/assets/Female/25-50Female.png'
import fiftyFemale from '../../../src/assets/Female/50Female.png'




export const UserForm = () => {


  

  const boxStyles = {

    marginTop: 100,
    height: 188,
    width: 500,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',


  }
  const typographyStyles = {
    padding: 20,
    fontFamily: "Arial",
    fontSize: 40,
  }

  const [userName, setUserName] = useState<String>();
  const [age, setAge] = useState<Number>(0);
  const [gender, setGender] = useState<String>("");
  const [userImage, setUserImage] = useState<string>();
  const [isFemale, setIsFemale] = useState<Boolean>(false);
  const [isMale, setIsMale] = useState<Boolean>(false);
  const handleChangeGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleChangeName = ((e: any) => {
    setUserName(e.target.value);
  });

  const handleChangeAge = ((e: any) => {
    setAge(Number(e.target.value));
  });


 useEffect(()=> {
  if(gender === "Male") {
    console.log(userImage);
    if(0<=age && age<25)   setUserImage(zeroTwoTwentyFiveMale);
    else if(25<=age && age<50)   setUserImage(twentyFiveToFiftyMale);
    else   setUserImage(fiftyMale);
  }
  
  if(gender === "Female") {
    if(0<=age && age<25) setUserImage(zeroTwoTwentyFiveFemale);
    else if(25<=age && age<50) setUserImage(twentyFiveToFiftyFemale);
    else setUserImage(fiftyFemale);
  }
 }, [gender, age]);

  return (
    <div style={boxStyles}>
      <Typography style={typographyStyles}>
        Enter User Details
      </Typography>
      <form>
        <label style={{ display: "block", padding: "20px" }}>Enter your username:
          <input onChange={handleChangeName} type="text" style={{ padding: "5px" }} />
        </label>
        {userName &&
          <>
            <label style={{ display: "block", padding: "20px" }}>Enter your age:
              <input onChange={handleChangeAge} type="number" style={{ padding: "5px" }} />
            </label>
            <label style={{ display: "block", padding: "20px" }}> Gender :
              <select
                style={{ display: "block", margin: "5px", padding : "5px"}}
                onChange={handleChangeGender}
              >
                <option value="Male">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </>
        }
      </form>
      <div>
          {
            userImage &&
            <>
              <img src={userImage} alt="Hello" />
            </>
          }
      </div>
    </div>
  )
}
