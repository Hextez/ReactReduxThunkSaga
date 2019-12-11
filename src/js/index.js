import store from '../js/store/index';
import { addArticle, getData} from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
window.getData = getData;