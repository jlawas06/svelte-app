<script lang="ts">
	import { goto } from '$app/navigation';
	import { signIn } from '$lib/stores/auth';

	let email = '';
	let password = '';
	let error = '';

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		error = '';

		const result = await signIn(email, password);
		if (result.success) {
			goto('/tasks');
		} else {
			error = result.error instanceof Error ? result.error.message : 'An unknown error occurred';
		}
	};
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>
<div class="flex flex-col justify-center h-full w-full">
	<div class="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md w-full">
		<h1 class="mb-6 text-2xl font-bold">Sign In</h1>

		<form on:submit={handleSubmit} class="space-y-4">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			{#if error}
				<p class="text-sm text-red-500">{error}</p>
			{/if}

			<button
				type="submit"
				class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				Sign In
			</button>
		</form>

		<p class="mt-4 text-center text-sm text-gray-600">
			Don't have an account?
			<a href="/auth/signup" class="font-medium text-blue-600 hover:text-blue-500">Sign Up</a>
		</p>
	</div>
</div>
