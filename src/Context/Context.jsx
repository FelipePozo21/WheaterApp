import { createContext, useEffect, useState } from "react";
import { searchHook } from "../utils/searchHook";
import { searchWheater } from "../utils/wheater";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [coordinates, setCoordinates] = useState({ long: null, lat: null });
  const [wheaterMin, setWheaterMin] = useState([]);
  const [wheaterMax, setWheaterMax] = useState([]);
  const [days, setDays] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  console.log(search);

  useEffect(() => {
    if (search) {
      searchHook(search, setCoordinates);
      if (coordinates) {
        searchWheater();
      }
    }
  }, [search]);

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        coordinates,
        setCoordinates,
        wheaterMin,
        setWheaterMin,
        wheaterMax,
        setWheaterMax,
        days,
        setDays,
        fetchData,
        setFetchData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
