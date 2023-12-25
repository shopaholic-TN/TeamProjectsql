import React, { useState ,useEffect } from 'react'
import './Butt.css'
import AdminSpace from './AdminSpace'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';


const adminHome = () => {
const [data,setData]= useState ([])
const [user ,setUser]= useState([])
const [admin ,setAdmin]= useState([])
const [seller ,setSeller]= useState([])
const [phones ,setPhones]= useState([])
const [computers ,setComputers]= useState([])
const [smartWatch ,setSmartWatch]= useState([])
const [camera ,setCamera]= useState([])
const [HeadPhones ,setHeadPhone]= useState([])
const [Gaming ,setGaming]= useState([])


const[refrech,setRefrech]=useState(false)




useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/admin/getUser');

        setData(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refrech]);
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      const filterUser = (data) => {
        return setUser( data.filter(row => row.role === "user"))
      };
      const filterAdmin = (data) => {
        return setAdmin( data.filter(row => row.role === "admin"))
      };
      const filterSeller = (data) => {
        return setSeller( data.filter(row => row.role === "seller"))
      };
      const filterPhones = (data) => {
        return setPhones( data.filter(row => row.role === "phones"))
      };
      const filtreComputer = (data) => {
        return setComputers( data.filter(row => row.role === "Computers"))
      };
      const filtreSm = (data) => {
        return setSmartWatch( data.filter(row => row.role === "SmartWatch"))
      };
      const filtreCam = (data) => {
        return setCamera( data.filter(row => row.role === "Camera"))
      };
      const filterHead = (data) => {
        return setHeadPhone( data.filter(row => row.role === "HeadPhones"))
      };
      const filterGam = (data) => {
        return setGaming( data.filter(row => row.role === "Gaming"))
      };
      // enum('Phones','Computers','SmartWatch','Camera','HeadPhones','Gaming')
      
      function appelerFonctions() {
       filterAdmin(data);
       filterSeller(data);
       filterUser(data)
       filterPhones(data)
       filtreComputer(data)
       filtreSm(data)
       filtreCam(data)
       filterHead(data)
       filterGam(data)
      }
  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
        <AdminSpace/>
        <Box component="main" sx={{ flexGrow:1,p:3,marginTop:"55px" }}>
       <Typography variant='h4'>
     <center><button className='button' onClick={()=>appelerFonctions()}>show</button></center> 
      <div style={{ display: 'flex' }}>
  <div style={{ border: '0px solid #ccc', padding: '10px', marginRight: '10px' }}>
    <BarChart
      xAxis={[{ scaleType: 'band', data: [' admin', 'user', 'seller'] }]}
      series={[{ data: [admin.length, user.length, seller.length] }]}
      width={300}
      height={300}
    />
  </div>

  <div style={{ border: '0px solid #ccc', padding: '10px' ,marginLeft:'80px', marginTop:'60px'}}>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: phones.length, label: 'phones' },
            { id: 1, value: computers.length, label: 'computer' },
            { id: 2, value: smartWatch.length, label: 'smartWatch' },
            { id: 3, value: camera.length, label: 'camera' },
            { id: 4, value: HeadPhones.length, label: 'headPhones' },
            { id: 5, value: Gaming.length, label: 'Gaming' },

          ],
        },
      ]}
      width={400}
      height={200}
    />
  </div>
</div>

  

       </Typography>

        </Box>
    </Box>
    </>
  )
}

export default adminHome



