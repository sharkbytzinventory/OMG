import React, { useState } from "react";
import "./salesorder.css";
import AddSalesItem from "./AddSalesItem";
import AddOrEditCustomer from "./AddorEditCustomer";

const SalesOrder = ({ onSalesData, addCustomer, addInvoice, saleData, onClose }) => {
  const [customer, setCustomer] = useState(
    saleData ? saleData.customer : "test"
  );
  const [invoice, setInvoice] = useState(saleData ? saleData.invoice : "");
  const [date, setDate] = useState(saleData ? saleData.date : "");
  const [status, setStatus] = useState(saleData ? saleData.status : "Draft");
  const [items, setItems] = useState(saleData ? saleData.items : []);
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [tax, setTax] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [addclick, setAddClick] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, invoice, date, status, items };
    onSalesData(data);
    addCustomer(customer);
    addInvoice(invoice);
    resetForm();
  };

  const handleAddSaleItem = () => {
    const newItem = {
      item: itemName,
      qty: qty,
      unitCost: unitCost,
      tax: tax,
      purchasePrice: purchasePrice,
    };
    setItems([...items, newItem]);
    resetItemForm();
  };

  const handleSave = () => {
    handleSubmit(new Event("submit")); 
  };



  const handleCancel = () => {
   setAddClick(false)
    resetForm();
  };

  

  const resetForm = () => {
    setCustomer("test");
    setDate("");
    setInvoice("");
    setStatus("Draft");
    setItems([]);
    resetItemForm();
  };

  const handleAdd = () => {
    setAddClick(true);
  }

  const resetItemForm = () => {
    setItemName("");
    setQty("");
    setUnitCost("");
    setTax("");
    setPurchasePrice("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
    {addclick ? <AddOrEditCustomer onClose ={handleCancel} /> : <>
      <form onSubmit={handleSubmit} className="salesorder-form">
        <h3 className="salesorder-form-heading">Add / Edit Customer PO </h3>
        <label htmlFor="customer" className="customer-salesorder_label">
          Customer:
        </label>
        <select
          id="customer"
          value={customer}
          onChange={(event) => setCustomer(event.target.value)}
          className="customer-salesorder_input"
        >
          <option value="Customer 1">Test</option>
          <option value="Customer 2">Admin</option>
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
        <label htmlFor="name" className="invoice-salesorder_label">
          Customer PO
        </label>
        <input
          type="text"
          id="name"
          value={invoice}
          onChange={(event) => setInvoice(event.target.value)}
          className="invoice-salesorder_input"
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
        <button
          type="button"
          onClick={handleAdd}
          className="add-item"
          htmlFor="Add=Item"
        >
          Add Item
        </button>
      </form>

      <AddSalesItem items={items} handleDeleteItem={handleDeleteItem} />
      <div>
        <p>
          {" "}
          Total <span style={{ paddingLeft: "20px" }}> 286000</span>
        </p>
      </div>

      <div className="savebotton">
        <button onClick={handleSave} className="btns">
          Save
        </button>
        <button onClick={onClose} className="btns">
          Cancel
        </button>
      </div></>
}
    </>
  );
};

export default SalesOrder;
