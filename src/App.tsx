import React, { useState } from "react";
import {
  Header,
  Wrapper,
  Row,
  Search,
  Form,
  Button,
  Image,
} from "./components/styled/index";
import axios from "axios";
import jesterLogo from "./images/jester.svg";
import JokeItem from "./components/JokeItem";
import { Joke } from "./common/types";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";
function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const END_POINT = `${BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(END_POINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch("");
  };
  return (
    <div>
      <Wrapper>
        <Row>
          <Image src={jesterLogo} />
          <Header>
            <h1>Jokes App</h1>
          </Header>
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </Form>
        <div>
          {error && <p>No joke found by your search term.</p>}
          {jokes.length > 0 &&
            // @ts-ignore
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
