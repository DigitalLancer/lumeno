"use client";
import { useState, useEffect } from 'react';
import { Mail, Lock, ArrowRight, PenTool } from 'lucide-react';
import Link from 'next/link';
import { useLogin } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useMe } from "@/hooks/useUser";

export default function LoginPage() {
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