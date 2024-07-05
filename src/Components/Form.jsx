import { useContext } from "react";
import { Context } from "../Context/Context";

export function Form() {
  const { setSearch } = useContext(Context);

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Click
      </button>
    </form>
  );
}
