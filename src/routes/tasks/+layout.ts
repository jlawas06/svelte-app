import { pb } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    if (!pb.authStore.isValid) {
        throw redirect(303, '/auth/signin');
    }
    return {};
}; 