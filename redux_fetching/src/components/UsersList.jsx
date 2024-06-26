import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from "../store/idnex";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Thre is an error....</div>;
  }
  return (
    <div>
      {data.map((data) => {
        return (
          <div  key={data.id}>
            <div>{data.name}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
