import React, { useState ,useEffect } from 'react'
import './Butt.css'
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


const ListOfProduct = () => {
const [data,setData]= useState ([])
const[refrech,setRefrech]=useState(false)




useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/admin/getPr');

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

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://127.0.0.1:3000/admin/delPr/${id}`);
          setRefrech(!refrech);
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
        <AdminSpace/>
        <Box component="main" sx={{ flexGrow:1,p:3,marginTop:"55px" }}>
       <Typography variant='h4'>
       <center><h4>liste of product</h4></center> 
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"> id </StyledTableCell>
              <StyledTableCell align="right"> img </StyledTableCell>
              <StyledTableCell align="right"> name </StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right"> description </StyledTableCell>
              <StyledTableCell align="right">category</StyledTableCell>
              <StyledTableCell align="right">Availability</StyledTableCell>
              <StyledTableCell align="right">new Product</StyledTableCell>
              <StyledTableCell align="right">Remise</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((row) => (
  <StyledTableRow key={row.id}> 
  <StyledTableCell align="center">{row.id}</StyledTableCell>
  <StyledTableCell align="center">{row.productImage}</StyledTableCell>
    <StyledTableCell component="th" scope="row">{row.productName}</StyledTableCell>
    <StyledTableCell align="right">{row.productPrice}</StyledTableCell>
    <StyledTableCell align="right">{row.productDescription}</StyledTableCell>
    <StyledTableCell align="right">{row.productCategory}</StyledTableCell>
    <StyledTableCell align="right">{row.productAvailability? "true" : "false" }</StyledTableCell>
    <StyledTableCell align="right">{row.newProduct? "true" : "false" }</StyledTableCell>
    <StyledTableCell align="right">{row.productRemise}%</StyledTableCell>
    <StyledTableCell align="right"><button class="bin-button" onClick={()=>{handleDelete(row.id)}}>
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

export default ListOfProduct