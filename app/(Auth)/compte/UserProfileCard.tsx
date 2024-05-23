import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AvatarProfile } from "./Features/AvatarProfile";

type UserProfileCardProps = {
  user: {
    displayName: string;
    photoURL: string;
  };
};

const UserProfileCard = ({ user }: UserProfileCardProps) => (
  <Card className="flex items-center justify-between w-3/4 p-3">
    <CardHeader className="flex flex-row items-center gap-4">
      <AvatarProfile src={user.photoURL} alt={user.displayName} />
      <CardTitle>{user.displayName}</CardTitle>
    </CardHeader>
    <Link href="/Compte" className="underline">
      Accéder à mon profil public
    </Link>
  </Card>
);

export default UserProfileCard;
