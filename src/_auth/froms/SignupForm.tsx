import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { singupValidator } from "@/lib/validators"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"
import { useToast } from "@/components/ui/use-toast"


const SignupFrom = () => {

    const { toast } = useToast()

    const [loading, setLoading] = useState(false)


    // 1. Define your form.
    const form = useForm<z.infer<typeof singupValidator>>({
        resolver: zodResolver(singupValidator),
        defaultValues: {
            name: '',
            username: "",
            email: '',
            password: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(user: z.infer<typeof singupValidator>) {
        const newUser = await createUserAccount(user)

        if (!newUser) {
            toast({
                variant: 'destructive',
                title: 'There was an error signing in!!'
            })
        }
    }


    return (
        <Form {...form}>
            <div className="w-[90%] sm:w-420 flex justify-center items-start flex-col">
                <div className="flex-center gap-x-2 ">
                    <img src="/assets/images/logo.svg" alt="logo" className="h-8" /> by louai
                </div>

                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-6">
                    Create a new account
                </h2>
                <form
                    className="flex flex-col gap-5 w-full mt-4"
                    onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">UserName</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="shad-input" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Password</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {
                            loading ? (
                                <div className="flex-center gap-2">
                                    <Loader /> Loading...
                                </div>
                            ) : 'Submit'
                        }
                    </Button>
                    <Button onClick={() => toast({ title: 'yey its working', })} type="button" className="shad-button_primary">
                        Submit

                    </Button>

                    <p className="text-small-regular text-light-2 text-start mt-2">
                        Already have an account?
                        <Link
                    
                            to="/sign-in"
                            className="text-primary-500 text-small-semibold ml-1">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </Form>

    )
}

export default SignupFrom
