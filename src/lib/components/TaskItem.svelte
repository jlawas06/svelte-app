<script lang="ts">
    import { deleteTask, toggleTask } from '$lib/stores/tasks';
    import type { Task } from '$lib/types';

    let { task } = $props<{ task: Task }>();
</script>

<div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
    <input
        type="checkbox"
        checked={task.is_done}
        onchange={(e) => toggleTask(task.id, e.currentTarget.checked)}
        class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <span class="flex-1 {task.is_done ? 'line-through text-gray-500' : ''}">{task.task_name}</span>
    <button
        onclick={() => deleteTask(task.id)}
        class="text-red-600 hover:text-red-800"
        aria-label="Delete task"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </button>
</div> 