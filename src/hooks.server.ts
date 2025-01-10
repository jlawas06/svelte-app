import { pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Set pb instance in locals
    event.locals.pb = pb;
    
    return resolve(event);
}; 