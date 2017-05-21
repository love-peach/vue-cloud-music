import MockAdapter from 'axios-mock-adapter';
import {promiseAjax} from 'zk-react';
import mockAjax from './mock-ajax';
import mockMenu from './mock-menu';
import mockUser from './mock-user';

const mock = new MockAdapter(promiseAjax.mockInstance);

mockAjax(mock);
mockMenu(mock);
mockUser(mock);
