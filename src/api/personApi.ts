import PersonDto from "./models/personDto";

const baseUrl = process.env.API_URL + '/person';

const getPeople = async (): Promise<PersonDto[]> => {
  const response = await fetch(baseUrl, { next: { tags: ['person'] } });
  return response.json();
};

const getPerson = async (id: number): Promise<PersonDto> => {
  const response = await fetch(baseUrl + '/' + id, { next: { tags: ['person'] } });
  return response.json();
};

const createPerson = async (person: PersonDto) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
    next: { tags: ['person'] }
  });
};

const updatePerson = async (person: PersonDto) => {
  await fetch(baseUrl + '/' + person.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
    next: { tags: ['person'] }
  });
};

const deletePerson = async (id: number) => {
  await fetch(baseUrl + '/' + id, { method: 'DELETE', next: { tags: ['person'] } });
};

export { getPeople, getPerson, createPerson, updatePerson, deletePerson };
