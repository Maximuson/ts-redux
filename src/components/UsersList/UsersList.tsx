import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Form, Table } from "react-bootstrap";
import StringifyObject from "./../Common/StringifyObject";

const UsersList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();

  const getAddressTypes = (users: any[]): any[string] => {
    return users.length ? Object.keys(users[0].address) : [];
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [addressType, setAddressType] = useState("city");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>
              <Form>
                <Form.Group className="d-flex align-items-center mb-0" controlId="exampleForm.SelectCustomSizeLg">
                  <Form.Label className="mr-2 mb-0">Address</Form.Label>
                  <Form.Control
                    as="select"
                    size="sm"
                    custom
                    value={addressType}
                    onChange={(e) => {
                      setAddressType(e.target.value);
                    }}
                  >
                    {getAddressTypes(users).map((item: string) => (
                      <option>{item}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                {typeof item.address[addressType] === "object" ? (
                  <StringifyObject
                    object={item.address[addressType]}
                    renderItem={(key, value) => {
                      return (
                        <>
                          <span className="font-weight-bold">{key}:</span> <span>{value} </span>
                        </>
                      );
                    }}
                  />
                ) : (
                  item.address[addressType]
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
