import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NotificationCard = () => (
  <Card className="flex items-center justify-between w-full p-3 border-none shadow-none bg-amber-500/15">
    <CardHeader className="flex flex-col gap-4">
      <CardTitle>Photo de profil</CardTitle>
      <CardDescription>
        Pour une experience plus agréable entre membres avec qui vous allez
        faire de bonnes affaires
      </CardDescription>
    </CardHeader>
    <Button>Accéder à mon profil public</Button>
  </Card>
);

export default NotificationCard;
