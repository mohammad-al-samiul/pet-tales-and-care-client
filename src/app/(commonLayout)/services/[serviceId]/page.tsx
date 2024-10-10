import React from "react";

type TParamsProps = {
  serviceId: string;
};
export default function ServiceCard({ params }: { params: TParamsProps }) {
  return (
    <div>
      <h1>this is service {params.serviceId}</h1>
    </div>
  );
}
