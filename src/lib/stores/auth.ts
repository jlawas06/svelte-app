import { pb } from '$lib/pocketbase';
import { writable } from 'svelte/store';

export const currentUser = writable(pb.authStore.record);

pb.authStore.onChange(() => {
    currentUser.set(pb.authStore.record);
});

export const signUp = async (email: string, password: string, passwordConfirm: string) => {
    try {
        await pb.collection('users').create({
            email,
            password,
            passwordConfirm
        });
        await pb.collection('users').authWithPassword(email, password);
        return { success: true };
    } catch (err) {
        console.error('Error signing up:', err);
        return { success: false, error: err };
    }
};

export const signIn = async (email: string, password: string) => {
    try {
        await pb.collection('users').authWithPassword(email, password);
        return { success: true };
    } catch (err) {
        console.error('Error signing in:', err);
        return { success: false, error: err };
    }
};

export const signOut = () => {
    pb.authStore.clear();
}; 