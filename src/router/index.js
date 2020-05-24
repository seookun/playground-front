import Vue from 'vue';
import VueRouter from 'vue-router';

import ChatFrame from '@/views/ChatFrame';
import ChatLobby from '@/views/ChatLobby';
import ChatRoom from '@/views/ChatRoom';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/chat/lobby',
  },
  {
    path: '/chat',
    component: ChatFrame,
    children: [
      {
        path: 'lobby',
        component: ChatLobby,
      },
      {
        path: 'room/:roomName/:userName',
        props: true,
        component: ChatRoom,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
