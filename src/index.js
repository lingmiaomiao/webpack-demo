import _ from 'lodash';
import './style.css';

function component(){
    var element = document.createElement('div');
    // lodash(目前是用过scrpit 脚本引入) 对于执行这一行是必需的
    // lodash， now imported bu this script
    element.innerHTML = _.join(['Hello','webpack'], '');
    // element.classList.add('hello')
    return element;
}
document.body.appendChild(component())

alert(1)