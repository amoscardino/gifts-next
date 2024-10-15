'use server';

import { redirect } from "next/navigation";
import GiftDto from "../api/models/giftDto";
import { createGift, deleteGift, updateGift } from "../api/giftApi";
import { revalidateTag } from "next/cache";
import { GiftStatus } from "../api/models/giftStatus";

const saveGiftAction = async (formData: FormData) => {
  const gift = {
    id: (formData.get('id') || 0) as number,
    name: formData.get('name') as string,
    price: parseFloat(formData.get('price') as string),
    status: formData.get('status') as GiftStatus,
    url: formData.get('url') as string,
    notes: formData.get('notes') as string,
  } as GiftDto;

  if (gift.id) {
    await updateGift(gift);
  } else {
    await createGift(gift);
  }

  revalidateTag('gift');
  redirect('/');
};

const deleteGiftAction = async (id: number) => {
  await deleteGift(id);
  revalidateTag('gift');
  redirect('/');
};

export { saveGiftAction, deleteGiftAction };
