import { pb } from '$lib/pocketbase';
import type { Task } from '$lib/types';
import { writable } from 'svelte/store';

export const tasks = writable<Task[]>([]);

export const loadTasks = async () => {
    try {
        const records = await pb.collection('tasks').getList(1, 50, {
            sort: '-created'
        });
        tasks.set(records.items as unknown as Task[]);
    } catch (err) {
        console.error('Error loading tasks:', err);
    }
};

export const addTask = async (taskName: string) => {
    try {
        const record = await pb.collection('tasks').create({
            task_name: taskName,
            is_done: false
        });
        tasks.update(current => [record as unknown as Task, ...current]);
    } catch (err) {
        console.error('Error adding task:', err);
    }
};

export const toggleTask = async (id: string, isDone: boolean) => {
    try {
        const record = await pb.collection('tasks').update(id, {
            is_done: isDone
        });
        tasks.update(current =>
            current.map(task => (task.id === id ? (record as unknown as Task) : task))
        );
    } catch (err) {
        console.error('Error updating task:', err);
    }
};

export const deleteTask = async (id: string) => {
    try {
        await pb.collection('tasks').delete(id);
        tasks.update(current => current.filter(task => task.id !== id));
    } catch (err) {
        console.error('Error deleting task:', err);
    }
}; 