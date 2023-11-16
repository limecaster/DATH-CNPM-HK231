import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(30).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    })

    const { register, handleSubmit, } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register("Fullname")} />
            <input type="text" placeholder="Email..."{...register("Email")} />
            <input type="number" placeholder="Age..." {...register("Age")} />
            <input type="password" placeholder="Password..." {...register("Password")} />
            <input type="password" placeholder="Confirm Password..."  {...register("Confirm Password")} />
            <input type="submit" />
        </form>
    );
};

export default Form;