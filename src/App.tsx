import React, { useState } from "react";
import {
  Header,
  Wrapper,
  Row,
  Search,
  Form,
  Button,
} from "./components/styled/index";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>
            <h1>Jokes App</h1>
          </Header>
        </Row>
        <Form>
          <Search
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Wrapper>
    </div>
  );
}

export default App;
