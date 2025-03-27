import { FC } from "react";


export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
    console.log("params" ,params);
  return <h1 className="text-3xl text-black mt-32">Товар с ID: {params.id}</h1>;
}
