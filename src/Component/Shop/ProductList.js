import * as React from 'react';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { FilterContext } from '../Context/filtercontext';
import GridView from './GridView';
import ListView from './ListView';
import AppsIcon from '@mui/icons-material/Apps';
import ReorderIcon from '@mui/icons-material/Reorder';
import styled from 'styled-components';
import { IconButton } from '@mui/material';

const FeatureNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const ProductList = () => {
    const { filter_products, list_view, setGridView, setListView } = useContext(FilterContext)
    return (
        <Box maxWidth="lg" sx={{ flexGrow: 1 }}>
            <FeatureNav>
                <IconButton sx={{ width: '52px', height: "52px" }}
                    onClick={setListView}>
                    <ReorderIcon />
                </IconButton>
                <IconButton sx={{ width: '52px', height: "52px" }}
                    onClick={setGridView}>
                    <AppsIcon />
                </IconButton>


            </FeatureNav>
            {list_view ? (
                <ListView products={filter_products} />
            ) : (

                <GridView products={filter_products} />

            )}
        </Box>

    )
}
export default ProductList