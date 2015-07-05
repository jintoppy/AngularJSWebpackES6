let homeModule = angular.module('myapp.home',[]);

import HomeMainController from './controllers/main';

homeModule.run($log=> $log.info("hello"));

homeModule.controller('HomeMainController',/* @ngInject */ HomeMainController);

export default homeModule = homeModule.name;