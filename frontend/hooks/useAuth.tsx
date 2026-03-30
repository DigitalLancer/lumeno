"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginDto } from "@/types/auth";
import { loginUser, logout } from "@/services/authService";
import { useRouter } from "next/navigation";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginDto) => loginUser(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["me"] });
      router.replace("/login");
    },
  })
}