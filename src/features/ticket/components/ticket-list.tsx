import { getTickets } from "../queries/get-tickets";
import { Ticket } from "@prisma/client";
import { TicketItem } from "./ticket-item";

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col gap-y-4 items-center animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket as Ticket} />
      ))}
    </div>
  );
};

export { TicketList };
