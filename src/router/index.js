import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import BoardFrame from '@/views/board/BoardFrame.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardCreate from '@/views/board/BoardCreate.vue';
import BoardEdit from '@/views/board/BoardEdit.vue';
import BoardDetail from '@/views/board/BoardDetail.vue';
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
    children: [
      {
        path: '',
        component: BoardList,
      },
      {
        path: 'create',
        component: BoardCreate,
      },
      {
        path: 'edit/:id',
        component: BoardEdit,
      },
      {
        path: ':id',
        component: BoardDetail,
        props: true,
      },
    ],
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
        path: ':roomName/:userName',
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
