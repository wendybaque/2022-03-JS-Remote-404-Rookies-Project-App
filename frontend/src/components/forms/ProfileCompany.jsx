/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import range from "../../assets/dataset/workforce.json";
import industries from "../../assets/dataset/industries.json";

export default function ProfileCompany() {
  return (
    <div className="  flex-col  p-5  bg-gray-100m-5 rounded-md ">
      <div className="text-emerald-700 text-base p-5">
        <h1 className="text-base">Mon profil</h1>
      </div>

      <div className=" rounded-md flex-col ">
        <div className=" flex-col border-b-2 bg-gray-100  ">
          <h2 className="text-base p-2">Mes informations</h2>
          <form className="  h-1/3 flex flex-wrap  items-baseline justify-stretch  m-2 p-2  ">
            <label htmlFor="name">Nom *</label>
            <input
              className=" p-2 w-auto"
              required
              type="text"
              placeholder="Nom"
              name="user_name"
            />
            <label htmlFor="surname">Prénom *</label>
            <input
              className=" p-2"
              required
              type="text"
              placeholder="Prénom"
              name="user_surname"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="photo">Photo</input> */}
            <label htmlFor="email">Email *</label>
            <input
              className="p-2 m-3"
              required
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <label htmlFor="phone">Téléphone</label>
            <input
              className="p-2 m-3"
              type="text"
              placeholder="Téléphone"
              name="user_phone"
            />
            <label htmlFor="prof">Profession</label>
            <input
              className="p-2 m-3"
              type="text"
              placeholder="Profession"
              name="user_prof"
            />
            <label htmlFor="linkedin">Profil LinkedIn</label>
            <input
              className="p-2 m-3"
              type="text"
              placeholder="Profil LinkedIn"
              name="user_linkedin"
            />
          </form>
          <div className=" flex justify-center items-center">
            <form>
              <label htmlFor="auth">Authentification</label>
              {/* onChange={(e) => this.setState({theme: e.target.value})}> */}
              <input
                className="p-2 m-3"
                type="radio"
                name="theme"
                value="Google"
              />
              Lier à Google
              <input
                className="p-2 m-3"
                type="radio"
                name="theme"
                value="LinkedIn"
              />
              Lier à LinkedIn
            </form>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className=" m-5 text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </div>
        </div>
        <div className=" border-b-2 bg-gray-100  ">
          <h2 className="text-base p-2">Mon entreprise</h2>
          <form className="flex flex-wrap  items-baseline   m-2 p-2 ">
            <label htmlFor="company name">Le nom de votre Entreprise *</label>
            <input
              className="  p-2 m-3"
              required
              type="text"
              placeholder="Le nom de votre entreprise"
              name="user_company"
            />
            {/* Faire un appel d'API pour uploader une photo/logo --> à revoir */}
            {/* <input type="file" id="logo">Logo</input> */}
            <label className="m-2" htmlFor="description">
              Description{" "}
            </label>
            <textarea
              className="w-1/2 "
              type="text"
              rows="2"
              placeholder="Description de votre entreprise"
              name="user_company_descr"
            />
            <label htmlFor="campus">Localisation</label>
            <select className="" name="user_campus">
              {/* A MAPPER AVEC VILLES DE FRANCE */}
              <option value="lieu 1">Lieu 1</option>
              <option value="lieu 2">Lieu 2</option>
              <option value="lieu 3">Lieu 3</option>
            </select>
            <label htmlFor="effectif">Effectif:</label>
            <select className=" " name="user_domain">
              {range.map((d) => (
                <option>{d.range}</option>
              ))}
            </select>
            <label htmlFor="industrie">Industrie</label>
            <select className="" name="user_industry">
              {industries.map((d) => (
                <option>{d.industry}</option>
              ))}
            </select>
            <label>Site web</label>
            <input
              className="  p-2 m-3"
              type="text"
              placeholder="Site web"
              name="user_web"
            />
          </form>
          <div className=" flex items-center justify-center">
            <button
              type="button"
              className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </div>
        </div>

        <div className="border-b-2 p-2 bg-gray-100">
          <h2 className="text-base p-2">Changer mon mot de passe</h2>
          <form className="flex flex-wrap  items-baseline justify-stretch m-2 p-2">
            <label htmlFor="upload">Mot de passe actuel *</label>
            <input
              className=" p-2"
              required
              type="text"
              placeholder="Mot de passe actuel"
              name="user_mdp_upload"
            />
            <label htmlFor="new">Nouveau mot de passe *</label>
            <input
              className=" p-2"
              required
              type="text"
              placeholder="Nouveau mot de passe"
              name="user_mdp_new"
            />
            <label htmlFor="confirm">Confirmer le mot de passe *</label>
            <input
              className=" p-2"
              required
              type="text"
              placeholder="Confirmer le mot de passe"
              name="user_confirm"
            />
          </form>
          <div className=" flex items-center justify-center m-1">
            <button
              type="button"
              className="  text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sauvegarder
            </button>
          </div>
        </div>

        <div className=" flex-col p-2 bg-gray-100 ">
          <h2 className="text-base p-2">Supprimer mon compte</h2>
          <form className="flex  items-center justify-center">
            <input
              className=" w-full p-2"
              type="text"
              placeholder="Attention, une fois votre compte supprimé, vous ne pourrez plus retourner en arrière"
              name="user_delete"
            />
            <button
              type="button"
              className=" m-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Supprimer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
