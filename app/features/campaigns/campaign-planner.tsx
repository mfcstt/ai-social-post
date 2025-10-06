import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Target,
  Users,
  DollarSign,
  Calendar,
  TrendingUp,
  Megaphone,
  Lightbulb,
  BarChart,
} from 'lucide-react';

import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';

export function CampaignPlanner() {
  const campaignData = {
    name: 'Campanha Lançamento SaaS Pro',
    objective: 'Gerar leads qualificados para demonstração do produto',
    description:
      'Campanha focada em captar leads B2B para software de gestão empresarial, direcionada para PMEs que buscam otimização de processos.',
    targetAudience: 'Gestores e proprietários de PMEs (25-45 anos)',
    budget: 'R$ 15.000 - R$ 25.000',
    duration: '60 dias',
    strategy:
      'Estratégia multicanal com foco em educação e demonstração de valor através de conteúdo técnico e cases de sucesso.',
    channelPlan:
      'LinkedIn Ads (70%) + Google Ads (20%) + Email Marketing (10%)',
    copyIdeas: [
      'Pare de perder tempo com planilhas desorganizadas',
      'Como aumentar a produtividade da sua equipe em 40%',
      'O segredo das empresas que crescem 3x mais rápido',
    ],
    creativeIdeas: [
      'Vídeo demonstrativo do dashboard principal',
      'Infográfico com ROI de clientes reais',
      'Carousel com antes/depois de processos otimizados',
    ],
    callToAction: 'Agende uma demo gratuita',
    kpiGoals: 'CPL: R$ 85 | Taxa de conversão: 8% | Demos agendadas: 200',
  };

  return (
    <section>
      <ScrollArea className='h-[calc(100vh-150px)] pb-4'>
        <div className='space-y-6'>
          {/* Nome da Campanha */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Target className='h-5 w-5' />
              <CardTitle>Nome da Campanha</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.name}</CardContent>
          </Card>

          {/* Objetivo */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />
              <CardTitle>Objetivo</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.objective}</CardContent>
          </Card>

          {/* Descrição */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Lightbulb className='h-5 w-5' />
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.description}</CardContent>
          </Card>

          {/* Público-alvo */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Users className='h-5 w-5' />
              <CardTitle>Público-alvo</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.targetAudience}</CardContent>
          </Card>

          {/* Orçamento */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <DollarSign className='h-5 w-5' />
              <CardTitle>Orçamento</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.budget}</CardContent>
          </Card>

          {/* Duração */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Calendar className='h-5 w-5' />
              <CardTitle>Duração</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.duration}</CardContent>
          </Card>

          {/* Estratégia */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />
              <CardTitle>Estratégia</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.strategy}</CardContent>
          </Card>

          {/* Plano de Canais */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Target className='h-5 w-5' />
              <CardTitle>Plano de Canais</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.channelPlan}</CardContent>
          </Card>

          {/* Ideias de Copy */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Megaphone className='h-5 w-5' />
              <CardTitle>Ideias de Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-6 space-y-2'>
                {campaignData.copyIdeas.map((copy: string, i: number) => (
                  <li key={i}>{copy}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Ideias de Criativos */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Lightbulb className='h-5 w-5' />
              <CardTitle>Ideias de Criativos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-6 space-y-2'>
                {campaignData.creativeIdeas.map((idea: string, i: number) => (
                  <li key={i}>{idea}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <Megaphone className='h-5 w-5' />
              <CardTitle>Call to Action</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.callToAction}</CardContent>
          </Card>

          {/* Metas de KPI */}
          <Card>
            <CardHeader className='flex items-center gap-2'>
              <BarChart className='h-5 w-5' />
              <CardTitle>Metas de KPI</CardTitle>
            </CardHeader>
            <CardContent>{campaignData.kpiGoals}</CardContent>
          </Card>
        </div>
      </ScrollArea>

      <div className='flex justify-end'>
        <Button>Salvar Campanha</Button>
      </div>
    </section>
  );
}
