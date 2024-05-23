import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlOptionsVertical } from "react-icons/sl";
export type ProfilUserProps = {};

export const ProfilUser = (props: ProfilUserProps) => {
  return (
    <div>
      <div className="flex items-start justify-between py-4 first:pt-0 last:pb-0">
        <div className="flex ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm text-slate-500 truncate">ada</p>
            <p className="text-sm font-medium text-slate-900 truncate">
              qfgsdh
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SlOptionsVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Bloquer cet utilisateur</DropdownMenuItem>
            <DropdownMenuItem>Signaler cet utilisateur</DropdownMenuItem>
            <DropdownMenuItem>Supprimer la conversation</DropdownMenuItem>
            <DropdownMenuItem>Données personnelles</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
