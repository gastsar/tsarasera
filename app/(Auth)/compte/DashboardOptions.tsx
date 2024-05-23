import Link from "next/link";
import { BsPostcard } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBeach, TbLockBolt } from "react-icons/tb";
import { CardDashboard } from "./Features/CardDashboard";

const classCard = "text-4xl text-gray-500";

const cardsOptions = [
  {
    icone: <BsPostcard className={classCard} />,
    title: "Annonces",
    description: "Gérer mes annoces déposées",
    path: "compte/mes-annonces",
  },
  {
    icone: <GiReceiveMoney className={classCard} />,
    title: "Transactions",
    description: "Suivres mes achats et ventes",
    path: "compte/mes-transactions",
  },
  {
    icone: <TbBeach className={classCard} />,
    title: "Réservation de vacances",
    description: "Retrouver vos réservations en tant que voyageur",
    path: "compte/mes-reservations",
  },
  {
    icone: <FaRegUserCircle className={classCard} />,
    title: "Profil & Espaces",
    description:
      "Modifier mon profil public, accéder à mes avis, aux espaces candidat, locataire et bailleur",
    path: "compte/profil",
  },
  {
    icone: <IoSettingsOutline className={classCard} />,
    title: "Paramètres",
    description:
      "Compléter et modifier mes informations privées et préférences",
    path: "compte/parametres",
  },
  {
    icone: <TbLockBolt className={classCard} />,
    title: "Connexion et sécurité",
    description: "Protéger mon compte et consulter son indice de sécurité",
    path: "compte/connexion-securite",
  },
];

const DashboardOptions = () => (
  <div className="grid-cols-3 grid gap-4 m-7">
    {cardsOptions.map((card, index) => (
      <Link href={card.path} key={index}>
        <CardDashboard
          icone={card.icone}
          title={card.title}
          description={card.description}
        />
      </Link>
    ))}
  </div>
);

export default DashboardOptions;
