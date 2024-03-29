import React from 'react';
import moment from "moment";
import { BsPencilSquare } from "react-icons/bs";

const OrderTables = ({ completeOrders, loading, paginate }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <>
            {completeOrders && completeOrders.filter(filteredData => filteredData.isComplete === true).map((order, index) => (
                <tr key={index}>
                    <td>{(paginate - 1) * 10 + index + 1}</td>
                    <td>{order.orderId}</td>
                    <td>{order.userId?.userIdNo}</td>
                    <td>{order.productId?.gameName}{order.productId?.categoryName}</td>
                    <td>{order.purchaseId?.product?.option} ({order.purchaseId?.product?.price})</td>
                    <td>Complete</td>
                    <td>{moment(order.createdAt).format('DD-MM-YYYY, h:mm a')}</td>
                    <td style={{ color: "blue" }}>{order.handOverAdmin?.username}</td>
                </tr>
            ))}
        </>
    );
};

export default OrderTables;