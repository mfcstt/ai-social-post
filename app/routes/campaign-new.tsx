import { CampaignsChatbot } from '~/features/campaigns/campaigns-chatbot';
import type { Route } from './+types/campaign-new';
import type { ChatMessage } from '~/features/campaigns/types';
import prisma from 'prisma/prisma';
import { redirect } from 'react-router';
import { CampaignPlanner } from '~/features/campaigns/campaign-planner';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const chatId = url.searchParams.get('chat');

  let messages = [] as ChatMessage[];

  if (chatId) {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
      },
    });

    if (!chat) {
      return redirect('/campaign/new');
    }

    messages = JSON.parse(chat?.content ?? '');
  }

  return {
    chatId,
    messages,
  };
}

export default function () {
  return (
    <div className='p-6 grid grid-cols-2 gap-6'>
      <CampaignsChatbot />
      <CampaignPlanner />
    </div>
  );
}
