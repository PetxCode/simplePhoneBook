import React from "react";
import styled from "styled-components";

const ApiCall = () => {
  const url1 = "https://jsonplaceholder.typicode.com/photos";

  const [user, setUser] = React.useState([]);
  const [name, setName] = React.useState("");

  const url = `https://api.github.com/users/${name}`;

  const fetchData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));

    console.log("user: ", user);
    console.log(url, name);
  };

  React.useEffect(() => {
    fetchData();
  }, [user]);
  return (
    <Container>
      {/* {user?.map((props, i) => ( */}
      <input
        placeholder="Enter your Github"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Submit{" "}
      </button>
      <Wrapper>
        <div>{user.login}</div>
        <img
          src={user.avatar_url}
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </Wrapper>
      {/* ))} */}
    </Container>
  );
};

export default ApiCall;

const Wrapper = styled.div``;
const Container = styled.div``;
