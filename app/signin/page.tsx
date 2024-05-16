"use client"

import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Button from "../components/global/button/Button";
import FormGroup from "../components/global/form/FormGroup";
import "./sign-in.css";
import signInActions from "./signInAction";

export default function SignIn() {
    const [signInForm, setSignInForm] = useFormState(signInActions, {success: false})

    const router = useRouter();

    useEffect(() => {
        if(signInForm.success) {
            router.push('/administrators')
        }
    }, [signInForm])
  
    return (
      <main>
        <section className="sign-in">
        <div className="container">
            <div className="grid-container">
                <div>
                    <h1>Welcome Back</h1>
                    <p>Don't have an account yet? <Link href="signup">Sign up here.</Link></p>
                </div>
                <form className="sign-in-form" action={setSignInForm} noValidate>
                    <FormGroup
                      title="Email"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <FormGroup
                      title="Password"
                      placeholder="*****"
                      type="password"
                      name="password"
                    />
                    <Button className="btn-theme" title="Sign in" type="submit" />
                    <Link href="/">Forgot your password?</Link>
                    {signInForm?.error && <p>{signInForm?.error}</p>}
                </form>
            </div>
        </div>
    </section>
      </main>
    );
  }