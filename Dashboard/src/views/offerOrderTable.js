import React, { useEffect, useState } from "react";

import moment from "moment";
let array = []

const offerOrderTable = ({ offerOrders, loading, paginatessss, markComplete, modalOpen, disabled }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    const selectAll = (orderId) => () => {
        const foundId = array.indexOf(orderId);
        if (foundId === -1) {
            array.push(orderId);
            localStorage.setItem("orderArray",array)
        } else {
            array.splice(foundId, 1);
            localStorage.setItem("orderArray",array)
        }
    
    }
    return (
        <>

            {offerOrders && offerOrders.filter(filteredData => filteredData.isComplete === false && filteredData.reject === false && filteredData.productId?.categoryName === '(Offer)').map((order, index) => (
                <tr>
                    <td ><input onClick={selectAll(order._id)} type="checkbox" /></td>
                    <td>{(paginatessss - 1) * 10 + index + 1}</td>
                    <td>{order.orderId}</td>
                    <td>{order.userId?.userIdNo}</td>
                    <td>{order.productId?.gameName}</td>
                    <td>{order.purchaseId?.product?.option} ({order.purchaseId?.product?.price})</td>
                    <td>{order.purchaseId?.accountType} </td>
                    <td>{order.purchaseId?.Number} </td>
                    <td>{order.purchaseId?.Password} </td>
                    <td>{order.purchaseId?.backupCode} </td>
                    <td>{moment(order.createdAt).format('DD-MM-YYYY, h:mm a')}</td>

                    {order.isComplete === false && (<>
                        <td>
                            <button className="btn btn-primary" disabled={disabled} onClick={markComplete(order._id, order.userId?._id, order.userId?.phonenumber, order.productId?.gameName, order.productId?.categoryName, order.purchaseId?.product?.option, order.purchaseId?.product?.price, order.walletId?._id)}>Mark as Complete</button>
                        </td>
                    </>)}
                    {order.isComplete === true && (<>
                        <td>
                            <button className="btn btn-primary">Completed</button>
                        </td>
                    </>)}

                    <td>
                        <button className="btn btn-primary" onClick={modalOpen(order._id, order.userId?._id, order.productId?.gameName, order.productId?.categoryName, order.purchaseId?.product?.option, order.purchaseId?.product?.price, order?.paymentComplete)}>Cancel</button>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default offerOrderTable;