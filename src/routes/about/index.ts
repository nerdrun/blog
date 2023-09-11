import importView from '../../utils/import.view';

export default [
  {
    path: '/about',
    name: 'about',
    component: importView('about', 'AboutView'),
  }
]