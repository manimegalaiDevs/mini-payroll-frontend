import { useMutation, useQuery } from "@tanstack/react-query";
// import axiosClient from "../Utils/axiosClient";
import type { AxiosError } from "axios";
import axios from "axios";

export interface User {
    id: number;
    login_user_id: string;
    user_role: string;
    staff_detail_id: number | null;
}

interface LoginResponse {
    message: string;
    loggedIn: boolean;
    user?: User;
}

interface LoginVariables {
    login_user_id: string;
    password: string;
}

export const useLogin = () => {
    return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginVariables>({
        mutationFn: async ({ login_user_id, password }) => {
            const response = await axios.post<LoginResponse>("http://localhost:5500/api/login", {
                login_user_id,
                password,
            },
                {
                    withCredentials: true,
                });
            return response.data;
        },
        retry: false,
    });
};

export const useValidUser = () => {
    return useQuery<LoginResponse>({
        queryKey: ["valid-user"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5500/api/valid-user", {
                withCredentials: true,
            });
            return res.data;
        },
        retry: false,
        staleTime: 0, // Always check fresh
    });
};

