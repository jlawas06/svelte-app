// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Add environment variables types
declare namespace App {
    interface Locals {
        pb: import('pocketbase').default
    }
}

interface ImportMetaEnv {
    PUBLIC_POCKETBASE_URL: string;
}

export { };
