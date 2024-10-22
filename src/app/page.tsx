import { getGifts } from "../api/giftApi";
import { getPeople } from "../api/personApi";
import Link from "next/link";
import PersonCard from "../components/PersonCard";
import GrandTotal from "../components/GrandTotal";

const Home = async () => {
  // const people = await getPeople();
  // const gifts = await getGifts();
  const [people, gifts] = await Promise.all([getPeople(), getGifts()]);

  const totalAmount = gifts.reduce((total, gift) => total + (gift.price || 0), 0);

  return (
    <div className="vstack gap-3">
      <div className="hstack justify-content-end">
        <Link href="/person" className="btn btn-outline-primary btn-sm">
          Add Person
        </Link>
      </div>

      {people.map(person => {
        const personGifts = gifts.filter(gift => gift.person.id === person.id);

        return (
          <PersonCard key={person.id} person={person} gifts={personGifts} />
        );
      })}

      <GrandTotal amount={totalAmount} />
    </div>
  );
};

export default Home;
