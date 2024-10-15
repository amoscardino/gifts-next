import PersonDto from "@/src/api/models/personDto";
import PersonForm from "@/src/components/PersonForm";

export default async function AddPerson() {
  const person = {} as PersonDto;

  return (
    <PersonForm person={person} />
  );
}
