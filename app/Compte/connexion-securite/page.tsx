"use client";
import { useState } from "react";
import {
  MdOutlineSecurityUpdateGood,
  MdSystemSecurityUpdateWarning,
} from "react-icons/md";
import CardCompteSecurity from "../Features/CardCompteSecurity";

export type connexionSecuriteProps = {};

export const connexionSecurite = (props: connexionSecuriteProps) => {
  const [isScurity, setIsScurity] = useState(false);
  return (
    <div>
      <div className="flex flex-col  items-center">
        {isScurity ? (
          <>
            <MdSystemSecurityUpdateWarning className="text-8xl text-amber-600 bg-amber-600/30 rounded-full p-5" />
            <h1 className="text-2xl font-semibold">
              {" "}
              Sécurité de compte faible
            </h1>
          </>
        ) : (
          <>
            <MdOutlineSecurityUpdateGood className="text-8xl text-green-600 bg-green-600/30 rounded-full p-5" />
            <h1 className="text-2xl font-semibold">
              {" "}
              Sécurité de compte forte
            </h1>
          </>
        )}
      </div>

      <div className="grid-cols-2 grid gap-4 m-7">
        <CardCompteSecurity title="Mot de passe " isScurity />
        <CardCompteSecurity
          title="Connexion en 2 étapes"
          description="Vous ne dispossez pas d'une connexion renforcée"
          isScurity
        />
        <CardCompteSecurity
          title="Numéro de téléphone"
          description="06 00 00 00 00"
          isScurity
        />
        <CardCompteSecurity
          title="Appareils connectés"
          description="2 appareils connectés à votre compte"
        />
      </div>
    </div>
  );
};

export default connexionSecurite;
