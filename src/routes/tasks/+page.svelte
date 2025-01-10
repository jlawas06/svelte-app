<script lang="ts">
    import TaskItem from '$lib/components/TaskItem.svelte';
    import { addTask, loadTasks, tasks } from '$lib/stores/tasks';
    import { onMount } from 'svelte';

    let newTaskName = '';

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        if (newTaskName.trim()) {
            await addTask(newTaskName.trim());
            newTaskName = '';
        }
    };

    onMount(() => {
        loadTasks();
    });
</script>

<div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Tasks</h1>

    <form on:submit={handleSubmit} class="mb-6">
        <div class="flex gap-2">
            <input
                type="text"
                bind:value={newTaskName}
                placeholder="Add a new task..."
                class="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Task
            </button>
        </div>
    </form>

    <div class="space-y-3">
        {#each $tasks as task (task.id)}
            <TaskItem {task} />
        {/each}
    </div>
</div> 