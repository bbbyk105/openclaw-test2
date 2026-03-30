'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function createTodo(formData) {
  const title = String(formData.get('title') || '').trim();
  if (!title) return;

  await prisma.todo.create({ data: { title } });
  revalidatePath('/');
}

export async function toggleTodo(formData) {
  const id = Number(formData.get('id'));
  const current = String(formData.get('completed')) === 'true';
  if (!id) return;

  await prisma.todo.update({
    where: { id },
    data: { completed: !current },
  });
  revalidatePath('/');
}

export async function deleteTodo(formData) {
  const id = Number(formData.get('id'));
  if (!id) return;

  await prisma.todo.delete({ where: { id } });
  revalidatePath('/');
}

export async function updateTodo(formData) {
  const id = Number(formData.get('id'));
  const title = String(formData.get('title') || '').trim();
  if (!id || !title) return;

  await prisma.todo.update({
    where: { id },
    data: { title },
  });
  revalidatePath('/');
}
