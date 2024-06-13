import styled from "styled-components";
import { BiEdit, BiTrash } from "react-icons/bi";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const HeadTr = styled(Tr)`
  background-color: #5c9c5e;
  color: white;
`;

function AddSalesItem() {
  return (
    <table className="table table-bordered table-striped table-hover shadow">
      <thead className="table-secondary">
        <Td>Item</Td>
        <Td>Qty</Td>
        <Td>Unit Cost</Td>
        <Td>Tax</Td>
        <Td>Sales Price</Td>
        <Td>Action</Td>
      </thead>

      <Tr>
        <Td>Samsung</Td>
        <Td>2</Td>
        <Td>10000</Td>
        <Td>8</Td>
        <Td>20800</Td>
        <Td>
          <Td><BiEdit /></Td>
          <Td><BiTrash /></Td>
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>2</Td>
        <Td>100000</Td>
        <Td>12</Td>
        <Td>216000</Td>
        <Td>
          <Td><BiEdit /></Td>
          <Td><BiTrash /></Td>
        </Td>
      </Tr>
      <Tr>
        <Td>Google Pixel</Td>
        <Td>2</Td>
        <Td>100000</Td>
        <Td>3</Td>
        <Td>50000</Td>
        <Td>
          <Td><BiEdit /></Td>
          <Td><BiTrash /></Td>
        </Td>
      </Tr>
    </table>
  );
}

export default AddSalesItem;
