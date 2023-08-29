import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button, CircularProgress} from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { getallProducts, deleteProduct, editProduct } from '../../services/product';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AddIcon from '@mui/icons-material/Add';
import TablePagination from '@mui/material/TablePagination';
import PopupCreate from './PopupProduct';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const ProductAmdin = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  

  useEffect(() => {
    getProducts();
  }, []);

  const toggleClose = () =>{
    setOpenModal(!openModal);
  }

  const getProducts = async () => {
    setLoading(true)
    try{
      const response = await getallProducts();
      setProduct(response.data.products);
      setTotal(response.data.products.length);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const deleteRow = async (id) => {
    Swal.fire({
      title: 'Confirmation to delete',
      text: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        getProducts();
      } else {
        return ;
      }
    });
    
  };

  const editRow = async(id, product) => {
    await editProduct(id, product);
    getProducts();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  const columns = [
    { id: '_id', label: '#', minWidth: 60 },
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'description', label: 'Description', minWidth: 120 },
    { 
      id: 'img',
      label: 'Image', 
      minWidth: 120,
      format: (value) => <img src={value} alt='Image' style={{width: '150px'}}/>
    },
    { id: 'classtify', label: 'Classify', minWidth: 140 },
    { id: 'price', label: 'Price', minWidth: 180 },
    {
      label: 'Tools',
      minWidth: 170,
      format: (value,row) => (
        <div>
          <span className='btn_tool' onClick={() => editRow(row._id)}><BorderColorIcon /></span>
          <span className='btn_tool' onClick={() => deleteRow(row._id)}><DeleteIcon /></span>
        </div>
        )
},
  ];
  const { theme } = props;
  return (
    <>
      {openModal && <PopupCreate handleClose={toggleClose} />}
    <Paper sx={{ width: '100%', position: 'relative', right: '0'}}>
      <Button 
          variant="contained"
          endIcon={<AddIcon />} 
          sx={{margin: '8px'}}
          onClick={toggleClose}>
        Add product
      </Button>
      <TableContainer TableContainer component={Paper} theme={theme} sx={{ maxHeight: 620}}>
        <>
        {!loading ? (
            <Table stickyHeader aria-label="custom-table">
              <TableHead >
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, backgroundColor: '#206f82', color: 'white', fontWeigh: 'bold' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {product
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format ? column.format(value, row) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            ) : (<div className='process'><CircularProgress /></div>)}
        </>
      </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
        </>
    
  );
}

export default ProductAmdin

  