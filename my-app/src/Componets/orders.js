import React from 'react';
import { NavLink } from "react-router-dom";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Box,
    Typography,
} from '@mui/material';

const Orders = () => {
    const ordersData = [
        { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', price: '$59.99' },
        { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', price: '$799.99' },
        { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', price: '$699.99' },
        { id: 'OR7429', item: 'Samsung Smart TV', status: 'Processing', price: '$799.99' },
        { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', price: '$799.99' },
        { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', price: '$699.99' },
        { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', price: '$59.99' },
    ];
    

    const getStatusColor = (status) => {
        switch (status) {
            case 'Shipped':
                return 'green';
            case 'Pending':
                return 'orange';
            case 'Delivered':
                return 'red';
            case 'Processing':
                return 'blue';
            default:
                return 'grey';
        }
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#6d96d4', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
                Latest Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Order ID</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Item</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Status</TableCell>
                            <TableCell style={{ color: '#fff', backgroundColor: '#343a40' }}>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersData.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <a href={`#${order.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                                        {order.id}
                                    </a>
                                </TableCell>
                                <TableCell>{order.item}</TableCell>
                                <TableCell>
                                    <span style={{
                                        color: '#fff',
                                        backgroundColor: getStatusColor(order.status),
                                        padding: '3px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                    }}>
                                        {order.status}
                                    </span>
                                </TableCell>
                                <TableCell>{order.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <NavLink className="goback" to={`/`}>
          Back
        </NavLink>
            {/* <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="primary">
                    Place New Order
                </Button>
                <Button variant="contained" color="secondary">
                    View All Orders
                </Button>
            </Box> */}
        </Box>
    );
};

export default Orders;
