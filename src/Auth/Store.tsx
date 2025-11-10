import { signal } from "@preact/signals-react";
import type { User } from "./queries";

export const userStore = signal<User | null>(null);