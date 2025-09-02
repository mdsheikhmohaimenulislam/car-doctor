"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json") //  works in browser
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service) => {
          return (
            <div key={service._id} className="card bg-base-100 shadow-sm">
              <figure>
                <Image width={60} height={60} src={service.img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
