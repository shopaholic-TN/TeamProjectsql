import React, { useState ,useEffect } from 'react'
import AdminSpace from './AdminSpace'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './Butt.css'


const ListOfSeller = () => {
const [data,setData]= useState ([])
const [rol , setRol] = useState('')
const[refrech,setRefrech]=useState(false)
const roleObj={
  role:rol
}
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
      
      const filterDataByType = (data, userType) => {
        return data.filter(row => row.role === userType);
      };

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://127.0.0.1:3000/admin/delUser/${id}`);
          setRefrech(!refrech);
        } catch (err) {
          console.log(err);
        }
      };
      const update = async (id) => {
        try {
        const res=   await axios.put(`http://127.0.0.1:3000/admin/modif/${id}`, roleObj)
      setData(res.data)
      setRefrech(!refrech)
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <AdminSpace/>
        <Box component="main" sx={{ flexGrow:1,p:3,marginTop:"55px" }}>
       <Typography variant='h4'>
       <center><h4>liste of seller</h4></center> 
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>id </StyledTableCell>
              <StyledTableCell>first name </StyledTableCell>
              <StyledTableCell align="right">last name </StyledTableCell>
              <StyledTableCell align="right">email</StyledTableCell>
              <StyledTableCell align="right">password</StyledTableCell>
              <StyledTableCell align="right"> address</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>
          {filterDataByType(data, 'seller').map((row) => (
  <StyledTableRow key={row.id}>
    <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
    <StyledTableCell component="th" scope="row">{row.firstName}</StyledTableCell>
    <StyledTableCell align="right">{row.lastName}</StyledTableCell>
    <StyledTableCell align="right">{row.email}</StyledTableCell>
    <StyledTableCell align="right">{row.password}</StyledTableCell>
    <StyledTableCell align="right">{row.address}</StyledTableCell>
    <StyledTableCell align="right">
    <select className='type' name="type" onChange={(e)=>{setRol(e.target.value)}} >
  <option  value="" ></option>
  <option  value="admin">Admin</option>
  <option  value="seller">Seller</option>
  <option  value="user">User</option>
</select>
    </StyledTableCell>
    <StyledTableCell align="right">
    <button class="edit-button" onClick={()=>update(row.id,rol)}>
  <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
</button>


    </StyledTableCell>
    <StyledTableCell align="right">
    
      <button class="bin-button"  onClick={() => handleDelete(row.id)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 39 7"
    class="bin-top"
  >
    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
    <line
      stroke-width="3"
      stroke="white"
      y2="1.5"
      x2="26.0357"
      y1="1.5"
      x1="12"
    ></line>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 33 39"
    class="bin-bottom"
  >
    <mask fill="white" id="path-1-inside-1_8_19">
      <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
    </mask>
    <path
      mask="url(#path-1-inside-1_8_19)"
      fill="white"
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
    ></path>
    <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 89 80"
    class="garbage"
  >
    <path
      fill="white"
      d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
    ></path>
  </svg>
</button>

    </StyledTableCell>
  </StyledTableRow>
))}
          </TableBody>
        </Table>
      </TableContainer>

       </Typography>

        </Box>
    </Box>
    </>
  )
}

export default ListOfSeller