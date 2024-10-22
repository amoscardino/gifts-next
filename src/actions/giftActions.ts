'use server';

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { createGift, deleteGift, updateGift } from "../api/giftApi";
import GiftDto from "../api/models/giftDto";

const saveGiftAction = async (gift: GiftDto) => {
  if (gift.id) {
    await updateGift(gift);
  } else {
    await createGift({ ...gift, id: 0 });
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
