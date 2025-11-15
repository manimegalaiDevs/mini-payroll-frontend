import { signal } from "@preact/signals-react";

export const staffPageSignal = signal<'StaffList' | 'StaffAdding'>('StaffList');