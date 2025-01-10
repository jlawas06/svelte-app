<script lang="ts">
	import { goto } from '$app/navigation';
	import { signUp } from '$lib/stores/auth';

	let email = '';
	let password = '';
	let passwordConfirm = '';
	let error = '';

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		error = '';

		if (password !== passwordConfirm) {
			error = 'Passwords do not match';
			return;
		}

		const result = await signUp(email, password, passwordConfirm);
		if (result.success) {
			goto('/tasks');
		} else {
			error = result.error instanceof Error ? result.error.message : 'An unknown error occurred';
		}
	};
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>
<div class="flex h-full w-full flex-col justify-center">
	<div class="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md w-full">
		<h1 class="mb-6 text-2xl font-bold">Sign Up</h1>

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

			<div>
				<label for="passwordConfirm" class="block text-sm font-medium text-gray-700"
					>Confirm Password</label
				>
				<input
					type="password"
					id="passwordConfirm"
					bind:value={passwordConfirm}
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
				Sign Up
			</button>
		</form>

		<p class="mt-4 text-center text-sm text-gray-600">
			Already have an account?
			<a href="/auth/signin" class="font-medium text-blue-600 hover:text-blue-500">Sign In</a>
		</p>
	</div>
</div>
