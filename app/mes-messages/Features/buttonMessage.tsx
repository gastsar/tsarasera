import { Button } from "@/components/ui/button";

export type buttonMessageProps = {};

const ButtonMessage = (props: buttonMessageProps) => {
  return (
    <>
      <div>
        <Button variant="outline"> Faire un offre</Button>
        <Button variant="primary">Acheter</Button>
      </div>
    </>
  );
};

export default ButtonMessage;
