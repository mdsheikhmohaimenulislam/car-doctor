import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
// import { useEffect, useState } from "react";

export default async function ServicesSection() {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("/services.json") //  works in browser
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);

  const services = await servicesCollection.find({}).toArray();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-11/12 mx-auto">
        {services.map((service) => {
          return (
            <div key={service._id} className="card bg-base-100 shadow-sm">
              <figure>
                <Image width={400} height={120} src={service.img} alt="image" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title">{service.title}</h2>
                    <p className="text-orange-400 font-bold text-xl">{service.price}</p>
                  </div>
                  <Link href={`/services/${service._id}`} className="text-orange-400 font-bold text-xl mt-5">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
