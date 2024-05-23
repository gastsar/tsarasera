import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProfileProps {
  src: string;
  alt: string;
}
export function AvatarProfile({ src, alt }: AvatarProfileProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
