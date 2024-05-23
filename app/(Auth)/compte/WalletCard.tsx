import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WalletCard = () => (
  <Card className="w-1/4 p-3">
    <CardHeader>
      <CardTitle>Porte-monnaie</CardTitle>
    </CardHeader>
    <CardContent>
      <p>0 Mga</p>
      <p>Solde disponible</p>
    </CardContent>
  </Card>
);

export default WalletCard;
