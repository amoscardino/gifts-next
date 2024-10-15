import { getGift } from "@/src/api/giftApi";
import GiftForm from "@/src/components/GiftForm";

export default async function EditGift({ params }: { params: { id: number } }) {
  const gift = await getGift(params.id);

  return (
    <GiftForm gift={gift} />
  );
}
