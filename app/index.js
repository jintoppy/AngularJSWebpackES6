// Import angular
import 'angular/angular.js';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Animation
import angularAnimate from 'angular-animate';
// Materail Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';

import home from './home/home.js';

let app = angular.module('myapp',[
	angularAnimate,
	angularMaterial,
	angularUIRouter,
	home
	]);

app.run(($log) => {
    $log.info('demo running');
})

export default app;