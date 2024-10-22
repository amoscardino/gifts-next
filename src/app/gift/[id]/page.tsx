import { getGift } from "@/src/api/giftApi";
import GiftForm from "@/src/components/GiftForm";

const EditGift = async ({ params }: { params: { id: number } }) => {
  const gift = await getGift(params.id);

  return (
    <GiftForm gift={gift} />
  );
};

export default EditGift;
