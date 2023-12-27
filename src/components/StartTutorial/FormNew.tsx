import { FieldValue, FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, { message: "give 3 chars" }),
    age: z
        .number({ invalid_type_error: "give number" })
        .min(18, { message: "above 18" }),
});

type FormData = z.infer<typeof schema>;

const FormNew = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    console.log(errors);

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="form-control"
                />
            </div>
            {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
            )}

            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age", { valueAsNumber: true })}
                    type="number"
                    id="age"
                    className="form-control"
                />
            </div>
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
            <button
                disabled={!isValid}
                className="btn btn-primary"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default FormNew;
