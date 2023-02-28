import { useState } from "react";
import axios from "axios";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const API_key = "fdce841950d4af39af9fcae51989c200";
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_key}`;
    try {
      const data = await axios({
        method: "get",
        url: url,
      });
      console.log(data);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="도시를 입력하세요."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
