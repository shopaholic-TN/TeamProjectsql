import {React,useState} from 'react'
import Header from './Header.jsx';
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './UserProfile.css'
import axios  from 'axios'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

export default function UserProfile(props){
  const changeView =  props.changeView
  console.log(changeView)
const [firstName,setFirstName]=useState('')
const  [lastName,setLastName]=useState('')
const [email,setEmail]=useState('')
const [address,setAddress]=useState('')
const [password,setPassword]=useState('')
const clear = ()=>{
  setFirstName('')
  setLastName('')
  setEmail('')
  setAddress('')
  setPassword('')
changeView('home')
}
const saveChanges=()=>{
  const changes = {
    firstName:firstName,
    lastName:lastName,
    email:email,
    address:address,
    password:password

  }
  axios.put("http://localhost:3001/api/users/updateUser/1",changes).then((results)=>{
    console.log('axios requestpassed successfully!',results.data)
  }).catch((error)=>{
    console.log(error)
  })
}

    return (
        <div className='UserProfile' >
          {/* <Header changeView={changeView} /> */}
    { /*   <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'20%'}}>
                <h2>market</h2>
                <ul style={{display:'inline-block'}} >
                    <li>home</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>sign up</li>
                
                </ul>
                <input type="text" />


                <div>
                <FavoriteBorderIcon  />
                <AddShoppingCartIcon/>
                <AccountCircleIcon/>
                </div>

    </nav> */}
              {/* <div className='list'>
              <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </div  > */}
      <div className='profile-content' >
              <div>
                home/my Account
              </div>
   <div className='manage-personal-infos' >
    <h2>Edit your Profile</h2>
   <div className='formulaire' >
        <label >firstName</label>
        <br />
        <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} />
        <label >LastName</label>
        <br />
        <input type="text" onChange={(e)=>{setLastName(e.target.value)}} />
        <label >Email</label>
        <br />
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} />
        <label >Address</label>
       <input type="text" onChange={(e)=>{setAddress(e.target.value)}} />
        
        <br />
        <input type="text" />
        <label htmlFor="password">Password Changes:</label>
        <br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
        
        </div>
        <div  className='buttons'>  
        <button onClick={()=>{saveChanges()}} >Save Changes</button>
        <button onClick={()=>{clear()}} >Cancel</button>
        </div>
   </div>
   </div>
        </div>
    )
}