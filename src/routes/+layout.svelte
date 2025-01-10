<script lang="ts">
	import { currentUser, signOut } from '$lib/stores/auth';
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<nav class="bg-white shadow">
		<div class="max-w-7xl mx-auto px-4">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex space-x-8">
						<a
							href="/"
							class="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600"
						>
							Home
						</a>
						<a
							href="/tasks"
							class="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600"
						>
							Tasks
						</a>
					</div>
				</div>
				<div class="flex items-center">
					{#if $currentUser}
						<span class="mr-4 text-sm text-gray-700">{$currentUser.email}</span>
						<button
							onclick={signOut}
							class="text-sm text-gray-700 hover:text-gray-900"
						>
							Sign Out
						</button>
					{:else}
						<a
							href="/auth/signin"
							class="text-sm text-gray-700 hover:text-gray-900 mr-4"
						>
							Sign In
						</a>
						<a
							href="/auth/signup"
							class="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
						>
							Sign Up
						</a>
					{/if}
				</div>
			</div>
		</div>
	</nav>

	<main class="pt-8 h-[calc(100vh-64px)]">
		{@render children()}
	</main>
</div>
