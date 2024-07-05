import { useContext } from "react";
import { Context } from "../Context/Context";
import { Layout } from "../layout/Layout";

export function Card() {
  const { days, wheaterMax, wheaterMin } = useContext(Context);

  return (
    <div>
      {days ? <Layout days={days} max={wheaterMax} min={wheaterMin} /> : ""}
    </div>
  );
}
