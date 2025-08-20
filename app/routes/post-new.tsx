import { PostsChatbot } from "~/features/posts/posts-chatbot";
import type { Route } from "./+types/post-new";
import type { ChatMessage } from "~/features/posts/types";
import prisma from "prisma/prisma";
import { redirect } from "react-router";
import { ContentPlanner } from "~/features/posts/post-suggestion";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const chatId = url.searchParams.get("chat");

  let messages: ChatMessage[] = [];

  if (chatId) {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
      },
    });

    if (!chat) {
      return redirect("/post/new");
    }

    try {
      messages = chat.content ? JSON.parse(chat.content) : [];
    } catch (err) {
      console.error("Erro ao parsear chat content:", err);
      messages = [];
    }
  }

  return {
    chatId,
    messages,
  };
}

export default function () {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <PostsChatbot />
      <ContentPlanner />
    </div>
  );
}
