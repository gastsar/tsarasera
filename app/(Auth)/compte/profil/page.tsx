import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const listEspace = [
  { title: "Espace Candidat", link: "", tags: "Accéder à mon profil candidat" },
  {
    title: "Espace Locataire",
    link: "",
    tags: "Accéder à mon profil locataire",
  },
  { title: "Espace Bailleur", link: "", tags: "Accéder à mon profil bailleur" },
];

function pageProfil() {
  return (
    <div className="p-4">
      <Separator className="my-2" />
      {listEspace.map((tag, index) => (
        <ul role="list" className="">
          <li key={index} className="text-sm font-semibold ">
            <Link href={tag.link} className="py-5 flex justify-between">
              <span>{tag.title}</span>{" "}
              <span className="underline"> {tag.tags}</span>
            </Link>
          </li>
          <Separator className="my-2" />
        </ul>
      ))}
    </div>
  );
}

export default pageProfil;
