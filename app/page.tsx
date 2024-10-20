import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Passport Registration and Renewal</h1>
      <p className="mb-6">Welcome to our secure passport services platform. Choose an option below to get started.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/register">Register</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}