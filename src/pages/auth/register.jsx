import AuthWrapper from "@/components/auth/auth-wrapper"
import RegisterForm from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <AuthWrapper title="Create an Account" subtitle="Enter your information to get started">
      <RegisterForm />
    </AuthWrapper>
  )
}

