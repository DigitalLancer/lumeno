"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMe } from "@/hooks/useUser";
import LoginPage from '@/pages/LoginPage';

export default function Home() {
  const router = useRouter();
  const { data: user, isLoading } = useMe();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/dashboard");
    }
  }, [user, isLoading, router]);
  
  if (isLoading) return <div>Loading...</div>;
  if (user) return null;

  return (
    <LoginPage />
  );
}