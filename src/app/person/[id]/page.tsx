import { getPerson } from "@/src/api/personApi";
import PersonForm from "@/src/components/PersonForm";

const EditPerson = async ({ params }: { params: { id: number } }) => {
  const person = await getPerson(params.id);

  return (
    <PersonForm person={person} />
  );
};

export default EditPerson;
