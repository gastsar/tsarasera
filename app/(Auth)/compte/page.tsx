"use client";
import useClientAuth from "@/app/Hooks/useClientAuth";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../db/firebase";
import DashboardOptions from "./DashboardOptions";
import NotificationCard from "./NotificationCard";
import UserProfileCard from "./UserProfileCard";
import WalletCard from "./WalletCard";

const pageDashboard = () => {
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
          <div className="flex flex-row gap-5 justify-between">
            <UserProfileCard
              user={{
                displayName: user.displayName || "Nom inconnu",
                photoURL: user.photoURL || "URL par défaut",
              }}
            />
            <WalletCard />
          </div>
          <NotificationCard />
          <DashboardOptions />
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
};

export default pageDashboard;
