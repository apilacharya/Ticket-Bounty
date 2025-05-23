import { Heading } from "@/components/heading";

import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/components/card-compact";

import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

const TicketsPage = async () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading
          title="Bounty Tickets"
          description="List all your tickets at one place"
        />

        <CardCompact
          title="Generate Ticket"
          description="A new ticket for bounty will be created"
          className="w-full max-w-[420px] self-center"
          content={<TicketUpsertForm />}
        />

        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
    </>
  );
};

export default TicketsPage;
