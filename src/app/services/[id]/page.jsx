import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const services = async ({ params }) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <div className="card bg-base-100 w-150 mb-20 mx-auto mt-20 shadow-sm">
        <figure>
          <Image width={500} height={120} src={data.img} alt="image" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{data.title}</h2>
            <p className="text-orange-400 font-bold text-xl">{data.price}</p>
            <p>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
