import { useContext, useState } from "react";
import { Context } from "../Context/Context";

export function Form() {
  const { setSearch } = useContext(Context);
  const [state, setState] = useState("");
  return (
    <form>
      <input
        type="text"
        onInput={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch(state);
        }}
      >
        Click
      </button>
    </form>
  );
}
