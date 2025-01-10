import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

// Auto refresh auth store on auth changes
pb.authStore.onChange(() => {
    console.log('authStore changed', pb.authStore.model);
}); 