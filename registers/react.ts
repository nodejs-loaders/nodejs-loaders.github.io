import { register } from 'node:module';
import jsdom from 'global-jsdom';

jsdom(undefined, {
	url: 'https://test.example.com',
});

register('@nodejs-loaders/alias', import.meta.url);
register('@nodejs-loaders/tsx', import.meta.url);
register('@nodejs-loaders/css-module', import.meta.url);
