import { Router } from 'express';
import { BlogRouters } from '../modules/blog/blog.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { AdminRouter } from '../modules/admin/admin.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blogs',
    route: BlogRouters,
  },

  {
    path: '/admin',
    route: AdminRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
