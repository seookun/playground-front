import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import BoardFrame from '@/views/board/BoardFrame.vue';
import ChatFrame from '@/views/chat/ChatFrame.vue';
import ChatLobby from '@/views/chat/ChatLobby.vue';
import ChatRoom from '@/views/chat/ChatRoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/board',
    component: BoardFrame,
  },
  {
    path: '/chat',
    component: ChatFrame,
    children: [
      {
        path: '',
        component: ChatLobby,
      },
      {
        path: 'room/:roomName/:userName',
        props: true,
        component: ChatRoom,
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
