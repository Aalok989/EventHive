import React from "react";

function Card({ image, name, role, text, icon }) {
  return (
    <div className="flex flex-col w-full gap-4 items-start justify-center p-6 group text-white">
      <div className="text-2xl text-accent">{icon}</div>
      <p className="text-gray-300 text-sm leading-relaxed">
        "{text}"
      </p>
      <div className="flex items-center gap-4">
        <img alt={name} className="w-12 h-12 rounded-full object-cover bg-white" src={image} />
        <div>
          <h3 className="font-base font-medium">{name}</h3>
          <p className="text-gray-300 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
