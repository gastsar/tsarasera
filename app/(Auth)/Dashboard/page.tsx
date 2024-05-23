"use client";
import useClientAuth from "@/app/Hooks/useClientAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBeach, TbLockBolt } from "react-icons/tb";
import { auth } from "../../db/firebase";
import { AvatarProfile } from "./Features/AvatarProfile";
import { CardDashboard } from "./Features/CardDashboard";

const classCard = "text-4xl text-gray-500";
const cardsOptions = [
  {
    icone: <BsPostcard className={classCard} />,
    title: "Annonces",
    description: "Gérer mes annoces déposées",
  },
  {
    icone: <GiReceiveMoney className={classCard} />,
    title: "Transactions",
    description: "Suivres mes achats et ventes",
  },
  {
    icone: <TbBeach className={classCard} />,
    title: "Réservation de vacances",
    description: "Retrouver vos réservations en tant que voyageur",
  },
  {
    icone: <FaRegUserCircle className={classCard} />,
    title: "Profil & Espaces",
    description:
      "Modifier mon profil public, accéder à mes avis, aux espaces candidat, locataire et bailleur",
  },
  {
    icone: <IoSettingsOutline className={classCard} />,
    title: "Paramètres",
    description:
      "Compléter et modifier mes informations privées et préférences",
  },
  {
    icone: <TbLockBolt className={classCard} />,
    title: "Connexion et sécurité",
    description: "Protéger mon compte et consulter son indice de sécurité",
  },
];

function pageDashboard() {
  const { user, redirectIfAuthentificated } = useClientAuth();

  const router = useRouter();

  useEffect(() => {
    redirectIfAuthentificated();
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("déconnexion"))
      .catch((error) => console.log(error));
    router.push("/");
  };

  return (
    <>
      {user && (
        <main className="m-5 flex flex-col gap-5">
          <div className="flex flex-row gap-5 justify-between ">
            <Card className="flex items-center justify-between w-3/4  p-3">
              <CardHeader className=" flex flex-row items-center gap-4">
                <AvatarProfile src={user.photoURL} alt={user.displayName} />
                <CardTitle>{user.displayName}</CardTitle>
              </CardHeader>
              <Link href="/Compte" className="underline">
                Accéder à mon profil public
              </Link>
            </Card>
            <Card className="w-1/4 p-3 ">
              <CardHeader>
                <CardTitle>Porte-monnaie</CardTitle>
              </CardHeader>
              <CardContent>
                <p>0 Mga</p>
                <p>Solde disponible</p>
              </CardContent>
            </Card>
          </div>
          <Card className="flex items-center justify-between w-full  p-3 border-none shadow-none bg-amber-500/15">
            <CardHeader className=" flex flex-col  gap-4">
              <CardTitle>Photo de profil</CardTitle>
              <CardDescription>
                Pour une experience plus agréable entre membres avec qui vous
                allez faire de bonnes affaires
              </CardDescription>
            </CardHeader>
            <Button>Accéder à mon profil public</Button>
          </Card>
          <div className="grid-cols-3 grid gap-4 m-7">
            {cardsOptions.map((card, index) => (
              <Link href="#" key={index}>
                <CardDashboard
                  icone={card.icone}
                  title={card.title}
                  description={card.description}
                />
              </Link>
            ))}
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            size={"lg"}
            className="w-1/5"
          >
            Se déconnecter
          </Button>
        </main>
      )}
    </>
  );
}

export default pageDashboard;
