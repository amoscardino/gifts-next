import PersonDto from "@/src/api/models/personDto";
import PersonForm from "@/src/components/PersonForm";

const AddPerson = () => {
  const person = {} as PersonDto;

  return (
    <PersonForm person={person} />
  );
};

export default AddPerson;
