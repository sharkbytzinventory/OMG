import React, { useState } from "react";
import AddPurchaseItem from "./AddPurchaseItem";
import AddOrEdit from "./AddOrEdit";

const PurchaseOrder = ({ onPurchaseData }) => {
  const [customer, setCustomer] = useState("Customer 1");
  const [customerpo, setCustomerpo] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Draft");
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [items, setItems] = useState([]);
  const [showAddOrEdit, setShowAddOrEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, customerpo, date, status, purchaseOrder, items };
    onPurchaseData(data);
    setCustomer("Customer 1");
    setCustomerpo("");
    setDate("");
    setStatus("Draft");
    setPurchaseOrder("");
    setItems([]);
  };

  const handleAddItemClick = () => {
    setShowAddOrEdit(true);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
    setShowAddOrEdit(false);
  };

  const handleCancel = () => {
    setShowAddOrEdit(false);
    resetpurchaseform()
  };

  return (
    <>
      {showAddOrEdit ? (
        <AddOrEdit onPurchaseData={handleAddItem} onCancel={handleCancel} />
      ) : (
        <form onSubmit={handleSubmit} className="salesorder-form">
          <h3 className="salesorder-form-heading">Add / Edit Purchase Order</h3>
          <label htmlFor="customer" className="customer-salesorder_label">
            Customer:
          </label>
          <select
            id="customer"
            value={customer}
            onChange={(event) => setCustomer(event.target.value)}
            className="customer-salesorder_input"
          >
            <option value="Customer 1">Admin</option>
            <option value="Customer 2">Test</option>
          </select>
          <label htmlFor="purchaseOrder" className="purchase-order-label">
            Purchase Order:
          </label>
          <select
            id="purchaseOrder"
            value={purchaseOrder}
            onChange={(event) => setPurchaseOrder(event.target.value)}
            className="purchase-order-input"
          >
            <option value="PO 01">PO 01</option>
            <option value="PO 02">PO 02</option>
          </select>
          <label htmlFor="customerpo" className="customer-po-label">
            Customer PO:
          </label>
          <select
            id="customerPO"
            value={customerpo}
            onChange={(event) => setCustomerpo(event.target.value)}
            className="customer-po-input"
          >
            <option value="PO1">CPO 001</option>
            <option value="PO2">CPO 002</option>
          </select>
          <label htmlFor="date" className="date-salesorder_label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="date-salesorder_input"
          />
          <label htmlFor="status" className="status-salesorder_label">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="status-salesorder_input"
          >
            <option value="Draft">Draft</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="button" onClick={handleAddItemClick} className="add-item">
            Add Item
          </button>

          <AddPurchaseItem purchaseItems={items} />

          <div className="buttons-group">
            <button type="submit" className="btns">
              Save
            </button>
            <button onClick={handleCancel} className="btns">
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default PurchaseOrder;
