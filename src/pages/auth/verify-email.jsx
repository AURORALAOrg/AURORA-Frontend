"use client"

import { useLocation } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Mail, CheckCircle } from "lucide-react"
import AuthWrapper from "@/components/auth/auth-wrapper"

export default function VerifyEmailPage() {
  const location = useLocation()
  const email = location.state?.email || "your email"

  return (
    <AuthWrapper>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
          <CardDescription className="mt-2">
            We&apos;ve sent a verification link to <span className="font-medium">{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <p className="font-medium">Verify your email address</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Please click the link in the email we just sent you to verify your account.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            If you don&apos;t see the email, check your spam folder or make sure the email address you provided is correct.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">

          <div className="text-center text-sm text-muted-foreground">
            <span>Already verified? </span>
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </AuthWrapper>
  )
}

