import GiftDto from "./models/giftDto";

const baseUrl = process.env.API_URL + '/gift';

const getGifts = async (): Promise<GiftDto[]> => {
  const response = await fetch(baseUrl, { next: { tags: ['gift'] } });
  return response.json();
};

const getGift = async (id: number): Promise<GiftDto> => {
  const response = await fetch(baseUrl + '/' + id, { next: { tags: ['gift'] } });
  return response.json();
};

const createGift = async (gift: GiftDto) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gift),
    next: { tags: ['gift'] }
  });
};

const updateGift = async (gift: GiftDto) => {
  await fetch(baseUrl + '/' + gift.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gift),
    next: { tags: ['gift'] }
  });
};

const deleteGift = async (id: number) => {
  await fetch(baseUrl + '/' + id, { method: 'DELETE', next: { tags: ['gift'] } });
};

export { getGifts, getGift, createGift, updateGift, deleteGift };
