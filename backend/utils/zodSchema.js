import zod from "zod";

export const userRegisterSchema = zod.object({
    name: zod.string(),
    email: zod.string().email("Invalid Email Address"),
    password: zod.string().min(8, "Password must be at least 8 characters long"),
    course:zod.string()
});

export const userLoginSchema = zod.object({
    email:zod.string().email("Invalid Email Address"),
    password:zod.string()
})

export const resetPaswordSchema = zod.object({
    token:zod.string(),
    password:zod.string().min(8,"Password must be at least 8 characters long")
});