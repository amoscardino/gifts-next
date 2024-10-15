'use client';

import { useForm } from "react-hook-form";
import { deletePersonAction, savePersonAction } from "../actions/personActions";
import PersonDto from "../api/models/personDto";
import { useRef, useState } from "react";

interface PersonFormProps {
  person: PersonDto;
}

const PersonForm = ({ person }: PersonFormProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<PersonDto>({ defaultValues: person });

  const onSubmit = handleSubmit(async () => {
    await savePersonAction(new FormData(formRef.current!));
  });

  const onDelete = async () => {
    setIsDeleting(true);
    await deletePersonAction(person.id!);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="card border rounded shadow">
      <div className="card-header">
        {person.id ? 'Edit' : 'Add'} Person
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
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
      </div>

      <div className="card-footer hstack flex-row-reverse justify-content-between">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting || isDeleting}
        >
          Save
        </button>

        {person.id && (
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
    </form>
  );
};

export default PersonForm;
