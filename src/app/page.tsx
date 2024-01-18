import { LogginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">🔐</h1>
        <p className="text-white text-lg">با 😄 وارد شوید</p>
        <div>
          <LogginButton>
            <Button variant="secondary" size="lg">
              ورود
            </Button>
          </LogginButton>
        </div>
      </div>
    </main>
  );
}
