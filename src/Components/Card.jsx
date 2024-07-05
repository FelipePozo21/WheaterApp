import { useContext } from "react";
import { Context } from "../Context/Context";
import { Layout } from "../layout/cardWheater";

export function Card() {
  const { fetchData, days, wheaterMax, wheaterMin } = useContext(Context);

  return (
    <div>
      {fetchData ? (
        <Layout days={days} max={wheaterMax} min={wheaterMin} />
      ) : (
        ""
      )}
    </div>
  );
}
