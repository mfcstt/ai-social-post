import { faker } from '@faker-js/faker';
import prisma from './prisma';

async function main() {
  console.log('🌱 Iniciando o seed do banco de dados...');

  // Limpar dados existentes
  console.log('🧹 Limpando dados existentes...');
  await prisma.growthCampaign.deleteMany();
  await prisma.chat.deleteMany();
  await prisma.user.deleteMany();

  // Criar 20 usuários
  console.log('👥 Criando 20 usuários...');
  const users = [];
  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
    });
    users.push(user);
  }

  // Criar 10 chats vazios
  console.log('💬 Criando 10 chats vazios...');
  const chats = [];
  for (let i = 0; i < 10; i++) {
    const chat = await prisma.chat.create({
      data: {
        title: `Chat ${i + 1}`,
        content: '', // Chat vazio conforme solicitado
      },
    });
    chats.push(chat);
  }

  // Criar 10 campanhas de growth
  console.log('� Criando 10 campanhas de growth...');
  const objectives = [
    'vendas',
    'leads',
    'lançamento de produto',
    'brand awareness',
    'engajamento',
  ];
  const audiences = [
    'jovens 18-25',
    'profissionais 25-40',
    'empresários',
    'estudantes',
    'pais de família',
  ];

  for (let i = 0; i < 10; i++) {
    const randomObjective = faker.helpers.arrayElement(objectives);
    const randomAudience = faker.helpers.arrayElement(audiences);

    await prisma.growthCampaign.create({
      data: {
        name: `Campanha ${faker.company.buzzVerb()} ${faker.commerce.productAdjective()}`,
        objective: randomObjective,
        description: faker.lorem.paragraph(2),
        targetAudience: randomAudience,
        budget: faker.helpers.arrayElement([
          'R$ 1.000 - R$ 5.000',
          'R$ 5.000 - R$ 10.000',
          'R$ 10.000+',
        ]),
        duration: faker.helpers.arrayElement([
          '15 dias',
          '30 dias',
          '60 dias',
          '90 dias',
        ]),
        strategy: faker.lorem.paragraph(1),
        channelPlan: faker.helpers.arrayElement([
          'Meta Ads + Google Ads',
          'Instagram + Facebook orgânico',
          'LinkedIn Ads + Email Marketing',
          'TikTok + Influenciadores',
          'Google Ads + SEO',
        ]),
        copyIdeas: faker.lorem.sentences(3).split('. ').join('\n• '),
        creativeIdeas: faker.lorem.sentences(2).split('. ').join('\n• '),
        callToAction: faker.helpers.arrayElement([
          'Saiba mais',
          'Compre agora',
          'Cadastre-se grátis',
          'Baixe o app',
          'Entre em contato',
          'Agende uma demo',
        ]),
        kpiGoals: faker.helpers.arrayElement([
          'CPA: R$ 50 | ROAS: 4x | CTR: 2%',
          'CPL: R$ 25 | Taxa conversão: 5%',
          'CPC: R$ 2 | Impressões: 100k',
          'Vendas: 100 unidades | Ticket médio: R$ 200',
        ]),
        chatId: chats[i].id, // Relaciona com um chat específico
      },
    });
  }

  console.log('✅ Seed concluído com sucesso!');
  console.log(`📊 Dados criados:`);
  console.log(`   - ${users.length} usuários`);
  console.log(`   - ${chats.length} chats`);
  console.log(`   - 10 campanhas de growth`);
}

main()
  .catch(e => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
