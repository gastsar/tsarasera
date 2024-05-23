import { Button } from "@/components/ui/button";

export type MessageProps = {};

const ErrorMessage = (props: MessageProps) => {
  return (
    <>
      <h1>Nous ne pouvons pas afficher le message pour le moment</h1>
      <p>
        Nous faisons au plus vite pour que vous puissiez reprendre votre
        conversation ! Merci de patienter quelques minutes avant de réessayer
      </p>
      <Button variant="primary">Réessayer</Button>
    </>
  );
};

export default ErrorMessage;
