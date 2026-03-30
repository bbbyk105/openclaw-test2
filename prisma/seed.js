const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.todo.count();
  if (count > 0) return;

  await prisma.todo.createMany({
    data: [
      { title: '最初のタスクを追加する', completed: false },
      { title: 'filter と sort を試す', completed: false },
      { title: '完了切り替えを確認する', completed: true }
    ]
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
