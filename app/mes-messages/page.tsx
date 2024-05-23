import { ScrollArea } from "@/components/ui/scroll-area";
import CardsList from "./CardsList/CardsList";
import Echange from "./Echange/Echange";
import ErrorMessage from "./Features/ErrorMessage";
import InputMessage from "./Features/InputMessage";
import { ProfilUser } from "./ProfileUser/ProfilUser";

const messageList = [
  {
    id: 1,
    title: "Message 1",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 1",
    user: "User 1",
    statusUser: "acheteur",
    date: "Date 1",
    status: "delete",
  },
  {
    id: 2,
    title: "Message 2",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 2  et si nous supprimions le message",
    user: "User 2",
    statusUser: "vendeur",
    date: "Date 2",
    status: "inline",
  },

  {
    id: 3,
    title: "Message 3",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 3 je ne peut pas le supprimer",
    user: "User 3",
    statusUser: "acheteur",
    date: "Date 3",
    status: "inline",
  },
  {
    id: 4,
    title: "Message 4",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 4 pour la suite",
    user: "User 4",
    statusUser: "acheteur",
    date: "Date 4",
    status: "inline",
  },
  {
    id: 5,
    title: "Message 5",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 5",
    user: "User 5",
    statusUser: "acheteur",
    date: "Date 5",
    status: "inline",
  },
  {
    id: 6,
    title: "Message 6",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 6",
    user: "User 6",
    statusUser: "acheteur",
    date: "Date 6",
    status: "inline",
  },
  {
    id: 7,
    title: "Message 7",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "Description 7",
    user: "User 7",
    statusUser: "acheteur",
    date: "Date 7",
    status: "inline",
  },
];

function pageMessages() {
  return (
    <main className="flex h-[40em] flex-row mx-5 gap-5 border rounded-b-lg">
      <div className="flex-none w-80 h-full">
        <h3>Mes messages</h3>

        <ul role="list" className="flex overflow-hidden  h-full flex-col ">
          <ScrollArea>
            {messageList.map((message) => (
              <li key={message.id}>
                <CardsList
                  title={message.title}
                  description={message.message}
                  userName={message.user}
                  date={message.date}
                  image={message.image}
                />
              </li>
            ))}{" "}
          </ScrollArea>
        </ul>
      </div>
      {!messageList.length ? (
        <ErrorMessage />
      ) : (
        <div className="flex-auto w-full flex flex-col justify-between">
          <Echange />
          <InputMessage />
        </div>
      )}

      <div className="flex-none w-48">
        <ProfilUser />
      </div>
    </main>
  );
}

export default pageMessages;
