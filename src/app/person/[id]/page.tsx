import { getPerson } from "@/src/api/personApi";
import PersonForm from "@/src/components/PersonForm";

export default async function EditPerson({ params }: { params: { id: number } }) {
  const person = await getPerson(params.id);

  return (
    <PersonForm person={person} />
  );
}
