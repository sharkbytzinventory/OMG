import React, { useState } from "react";

const AddOrEdit = ({ onPurchaseData, onCancel }) => {
  const [customer, setCustomer] = useState("Product 1");
  const [availableQty, setAvailableQty] = useState("");
  const [qtyAllocated, setQtyAllocated] = useState("");
  const [remainingQty, setRemainingQty] = useState("");
  const [invoice, setInvoice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      customer,
      availableQty,
      qtyAllocated,
      remainingQty,
      invoice,
      date,
    };
    onPurchaseData(item);
    setCustomer("Product 1");
    setAvailableQty("");
    setQtyAllocated("");
    setRemainingQty("");
    setInvoice("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="salesorder-form">
        <h3 className="salesorder-form-heading">Add / Edit Item</h3>
        <label htmlFor="customer" className="customer-salesorder_label">
          Item Name:
        </label>
        <select
          id="customer"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="customer-salesorder_input"
        >
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <label htmlFor="availableQty" className="availableQty-salesorder_label">
          Available Qty:
        </label>
        <input
          type="number"
          id="availableQty"
          value={availableQty}
          onChange={(event) => setAvailableQty(event.target.value)}
          className="availableQty-salesorder_input"
        />
        <label htmlFor="qtyAllocated" className="qtyAllocated-salesorder_label">
          Qty Allocated:
        </label>
        <input
          type="number"
          id="qtyAllocated"
          value={qtyAllocated}
          onChange={(event) => setQtyAllocated(event.target.value)}
          className="qtyAllocated-salesorder_input"
        />
        <label htmlFor="remainingQty" className="remainingQty-salesorder_label">
          Remaining Qty:
        </label>
        <input
          type="number"
          id="remainingQty"
          value={remainingQty}
          onChange={(event) => setRemainingQty(event.target.value)}
          className="remainingQty-salesorder_input"
        />
        <label htmlFor="invoice" className="remainingQty-salesorder_label">
          Invoice Number:
        </label>
        <input
          type="number"
          id="invoice"
          value={invoice}
          onChange={(event) => setInvoice(event.target.value)}
          className="remainingQty-salesorder_input"
        />
        <label htmlFor="date" className="remainingQty-salesorder_label">
          Invoice Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="remainingQty-salesorder_input"
        />

        <div className="buttons-group">
          <button type="submit" className="btns">
            Save{" "}
          </button>
          <button type="button" onClick={onCancel} className="btns">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddOrEdit;
