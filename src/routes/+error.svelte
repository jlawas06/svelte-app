<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="h-screen w-full flex items-center justify-center">
    <h1 class="text-xl text-center">{$page.status}: {$page.error?.message}</h1>
</div>