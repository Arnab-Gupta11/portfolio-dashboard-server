import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { ProjectRouters } from '../modules/project/project.routes';
import { MessageRoutes } from '../modules/message/message.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/message',
    route: MessageRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
