'use server';

import { redirect } from "next/navigation";
import PersonDto from "../api/models/personDto";
import { createPerson, deletePerson, updatePerson } from "../api/personApi";
import { revalidateTag } from "next/cache";

const savePersonAction = async (formData: FormData) => {
  const person = {
    id: (formData.get('id') || 0) as number,
    name: formData.get('name') as string,
  } as PersonDto;
  
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
