import importView from '../../utils/import.view';

export default [
  {
    path: '/',
    name: 'home',
    component: importView('home', 'HomeView'),
  }
]