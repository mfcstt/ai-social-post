import { faker } from '@faker-js/faker'
import prisma from "./prisma";

async function main() {
    
  console.log('🌱 Iniciando o seed do banco de dados...')

  // Limpar dados existentes
  console.log('🧹 Limpando dados existentes...')
  await prisma.post.deleteMany()
  await prisma.chat.deleteMany()
  await prisma.user.deleteMany()

  // Criar 20 usuários
  console.log('👥 Criando 20 usuários...')
  const users = []
  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
    })
    users.push(user)
  }

  // Criar 10 chats vazios
  console.log('💬 Criando 10 chats vazios...')
  const chats = []
  for (let i = 0; i < 10; i++) {
    const chat = await prisma.chat.create({
      data: {
        title: `Chat ${i + 1}`,
        content: '', // Chat vazio conforme solicitado
      },
    })
    chats.push(chat)
  }

  // Criar 10 posts
  console.log('📝 Criando 10 posts...')
  const postTypes = ['instagram', 'facebook', 'twitter', 'linkedin', 'tiktok']
  
  for (let i = 0; i < 10; i++) {
    const randomType = faker.helpers.arrayElement(postTypes)
    
    await prisma.post.create({
      data: {
        title: faker.lorem.sentence({ min: 3, max: 6 }),
        description: faker.lorem.paragraph(2),
        type: randomType,
        copy_ideas: faker.lorem.sentences(3).split('. ').join('\n'),
        hashtags: Array.from({ length: 5 }, () => `#${faker.word.noun()}`).join(' '),
        call_to_action: faker.helpers.arrayElement([
          'Clique no link da bio!',
          'Compartilhe nos comentários!',
          'Marque um amigo!',
          'Salve este post!',
          'Siga para mais conteúdo!',
          'Deixe seu like ❤️'
        ]),
        image_suggestions: faker.lorem.sentences(2),
        content: faker.lorem.paragraphs(2, '\n\n'),
        chat_history: [], // Array JSON vazio para histórico do chat
        chatId: chats[i].id, // Relaciona com um chat específico
      },
    })
  }

  console.log('✅ Seed concluído com sucesso!')
  console.log(`📊 Dados criados:`)
  console.log(`   - ${users.length} usuários`)
  console.log(`   - ${chats.length} chats`)
  console.log(`   - 10 posts`)
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
