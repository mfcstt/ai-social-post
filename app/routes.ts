import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('layouts/layout.tsx', [
    index('routes/dashboard.tsx'),
    route('campaigns', 'routes/campaigns.tsx'),
    route('campaign/new', 'routes/campaign-new.tsx'),
    route('campaign/edit/:id', 'routes/campaign-edit.tsx'),
    route('users', 'routes/users.tsx'),
  ]),
  route('api/chat', 'routes/api.chat.ts'),
] satisfies RouteConfig;
