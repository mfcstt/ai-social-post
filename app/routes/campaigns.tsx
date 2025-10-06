import type { Route } from '../+types/root';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/ui/table';
import prisma from 'prisma/prisma';

export async function loader() {
  return {
    campaigns: await prisma.growthCampaign.findMany(),
  };
}

export default function ({ loaderData }: Route.ComponentProps) {
  const campaigns =
    loaderData && 'campaigns' in loaderData
      ? (loaderData as { campaigns: any[] }).campaigns
      : [];
  return (
    <div className='p-6'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome da Campanha</TableHead>
            <TableHead>Objetivo</TableHead>
            <TableHead>Público-alvo</TableHead>
            <TableHead>Orçamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign: any) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.objective}</TableCell>
              <TableCell>{campaign.targetAudience}</TableCell>
              <TableCell>{campaign.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
