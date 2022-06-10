import React from "react";

import industries from "../../assets/dataset/industries.json";
import localisation from "../../assets/dataset/localisation.json";
import range from "../../assets/dataset/workforce.json";

export default function NewProjectConsultingCompany() {
  return (
    <div className="border-b-2 flex flex-col flex-wrap w-full">
      <form>
        <h2 className="text-base p-2">Le nom de votre entreprise *</h2>
        {/* <div className="flex justify-end">
        <label htmlFor="image">image:</label>
        <input type="file" {...register("image")} />
      </div> */}
        <div className="flex flex-wrap m-2">
          <input
            className="required form-control
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            placeholder="Entreprise SAS"
          />
        </div>
        <h2 className="text-base p-2">Description de l&apos;entreprise*</h2>
        <div className="flex flex-wrap m-2">
          <textarea
            className="required form-control
            w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            placeholder="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
          />
        </div>

        <div className="flex flex-wrap mb-5">
          <h2 className="text-base p-2">Industrie</h2>
          <div className="flex flex-wrap m-2">
            <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {industries.map((d) => (
                <option>{d.industry}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex mb-5">
          <h2 className="text-base p-2">Site web</h2>
          <input
            className="form-control
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:ring-green-400 focus:outline-none"
            type="text"
            placeholder="www.entreprise.com"
          />
        </div>

        <div className="flex mb-5">
          <h2 className="text-base p-2">Localisation de l&apos;entreprise</h2>
          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {localisation.map((d) => (
              <option>{d.localisation}</option>
            ))}
          </select>
        </div>
        <div className="flex mb-5">
          <h2 className="text-base p-2">Effectif de l&apos;entreprise</h2>
          <select className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {range.map((d) => (
              <option>{d.range}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
