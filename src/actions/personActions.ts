'use server';

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { createPerson, deletePerson, updatePerson } from "../api/personApi";
import PersonDto from "../api/models/personDto";

const savePersonAction = async (person: PersonDto) => {  
  if (person.id) {
    await updatePerson(person);
  } else {
    await createPerson(person);
  }

  revalidateTag('person');
  redirect('/');
};

const deletePersonAction = async (id: number) => {
  await deletePerson(id);
  revalidateTag('person');
  redirect('/');
};

export { savePersonAction, deletePersonAction };
