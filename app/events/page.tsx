import { Event } from "@/components/Event";
import { EventProps } from "@/components/Event/EventProps";

function EventsPage() {
  const events: EventProps[] = [
    {
      title: "titolo 1",
      company: "compagnia",
      place: "dove",
      date: new Date(),
    },
    {
      title: "titolo 2",
      company: "compagnia",
      place: "dove",
      date: new Date(),
    },
    {
      title: "titolo 3",
      company: "compagnia",
      place: "dove",
      date: new Date(),
    },
    {
      title: "titolo 4",
      company: "compagnia",
      place: "dove",
      date: new Date(),
    },
  ];

  const renderEvents = () => {
    if (events.length === 0) {
      return (
        <h3 className="text-2xl text-center my-8">
          Non ci sono eventi in programma
        </h3>
      );
    }

    return (
      <div className="flex justify-center items-center gap-8 flex-wrap container mt-10">
        {events.map(event => (
          <Event key={event.title + event.date.getTime()} {...event} />
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
