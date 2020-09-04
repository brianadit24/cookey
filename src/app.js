import "regenerator-runtime";
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from './script/view/main.js';

document.addEventListener("DOMContentLoaded", main);