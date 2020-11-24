import React, { useState, useEffect } from "react";
import { Table, FormCheck } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { getList, rmItem, UpdatedItem } from "../api/api";

const Shopinglist = () => {
  const [items, setItem] = useState([]);
  const [isChecket, setIsChecket] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const fetchList = async () => {
      const List = await getList();
      setItem(List);
    };
    fetchList();
  }, []);

  const deleteItem = async (id) => {
    await rmItem(id);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Shopinglist</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Önskades</th>
              <th>Ta Bort</th>
            </tr>
          </thead>
          <tbody>
            {items
              ? items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item._id)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                ))
              : "Loding...."}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Shopinglist;
