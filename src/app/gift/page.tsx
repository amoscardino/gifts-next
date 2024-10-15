import GiftDto from "@/src/api/models/giftDto";
import { getPerson } from "@/src/api/personApi";
import GiftForm from "@/src/components/GiftForm";

export default async function AddGift({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const personId = +(searchParams['personId'] as string);
  const person = await getPerson(personId);
  const gift = { person } as GiftDto;

  return (
    <GiftForm gift={gift} />
  );
}
