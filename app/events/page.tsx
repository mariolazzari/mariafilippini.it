import { Event } from "@/components/Event";
import { events } from "@/data/events";

function EventsPage() {
  const renderEvents = () => {
    if (events.length === 0) {
      return (
        <h3 className="text-2xl text-center my-8">
          Non ci sono eventi in programma
        </h3>
      );
    }
    return (
      <div className="flex justify-center items-center gap-16 flex-wrap container mt-10 mx-auto">
        {events.map((event, key) => (
          <Event key={key} event={event} />
        ))}
      </div>
    );
  };

  return (
    <>
      <h2 className="text-4xl text-center mt-4">Prossimi eventi</h2>
      {renderEvents()}
    </>
  );
}

export default EventsPage;
