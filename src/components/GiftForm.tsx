'use client';

import { useForm } from "react-hook-form";
import { deleteGiftAction, saveGiftAction } from "../actions/giftActions";
import GiftDto from "../api/models/giftDto";
import { useRef, useState } from "react";
import { GiftStatus } from "../api/models/giftStatus";

interface GiftFormProps {
  gift: GiftDto;
}

const GiftForm = ({ gift }: GiftFormProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<GiftDto>({ defaultValues: gift });

  const onSubmit = handleSubmit(async () => {
    await saveGiftAction(new FormData(formRef.current!));
  });

  const onDelete = async () => {
    setIsDeleting(true);
    await deleteGiftAction(gift.id!);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="card border rounded shadow">
      <div className="card-header">
        {gift.id ? 'Edit' : 'Add'} Gift
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="personName" className="form-label">Person</label>
          <input
            id="personName"
            className="form-control"
            readOnly
            {...register('person.name')}
          />
          {errors.name && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Gift</label>
          <input
            id="name"
            className="form-control"
            {...register('name', {
              required: { value: true, message: 'Name is required' },
              maxLength: { value: 50, message: 'Name is too long' }
            })}
          />
          {errors.name && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                className="form-select"
                {...register('status')}
              >
                {Object.keys(GiftStatus).map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {errors.status && (
                <p className="text-danger">{errors.status.message}</p>
              )}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                id="price"
                className="form-control"
                {...register('price')}
              />
              {errors.price && (
                <p className="text-danger">{errors.price.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="url" className="form-label">URL</label>
          <div className="row align-items-stretch">
            <div className="col">
              <input
                id="url"
                className="form-control"
                {...register('url')}
              />
            </div>

            {gift.url && (
              <div className="col-3 align-self-end text-end">
                <a
                  href={gift.url}
                  target="_blank"
                  className="btn btn-outline-secondary d-block"
                >
                  View
                </a>
              </div>
            )}
          </div>
          {errors.url && (
            <p className="text-danger">{errors.url.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea
            id="notes"
            className="form-control"
            {...register('notes')}
          />
          {errors.notes && (
            <p className="text-danger">{errors.notes.message}</p>
          )}
        </div>
      </div>

      <div className="card-footer hstack flex-row-reverse justify-content-between">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting || isDeleting}
        >
          Save
        </button>

        {gift.id && (
          <button
            type="button"
            className="btn btn-outline-danger"
            disabled={isSubmitting || isDeleting}
            onClick={onDelete}
          >
            Delete
          </button>
        )}
      </div>

      <input type="hidden" {...register('id')} />
      <input type="hidden" {...register('person.id')} />
      <input type="hidden" {...register('person.name')} />
    </form>
  );
};

export default GiftForm;