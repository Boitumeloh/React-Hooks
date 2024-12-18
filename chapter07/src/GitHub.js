import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Media } from "react-bootstrap";

const GitHub = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Boitumeloh");
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
  }, [searchTerm]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getData();
  };

  const listUsers = data.map((user) => (
    <Media key={user.id}>
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={user.avatar_url}
          alt="Generic placeholder"
        />
      </a>
      <Media.Body>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
      </Media.Body>
    </Media>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3>GitHub Users Results</h3>
      {isLoading && <ReactLoading type="spinningBubbles" color="#444" />}
      {listUsers}
    </div>
  );
};

export default GitHub;
