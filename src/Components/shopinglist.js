import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { getList, rmItem } from "../api/api";
import moment from "moment";

const Shopinglist = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const List = await getList();
      setItem(List);
    };
    fetchList();
  }, []);

  const deleteItem = async (id) => {
    await rmItem(id);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Shopinglist</h3>
        <Table striped bordered hover>
          <thead>
            <tr className="tr">
              <th>Produkt</th>
              <th>Önskades</th>
              <th>Ta Bort</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    {moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger delbtn"
                      onClick={() => deleteItem(item._id)}
                    >
                      <BsTrash className="delbtn" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <Spinner animation="border" role="status" />
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Shopinglist;
