import orgs from './mockdata/organizations';
import mockUrls from './mock-urls';

export default function (mock) {
    mock.onGet(mockUrls.ajaxGet).reply(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, orgs]);
            }, 2000);
        });
    });
    mock.onGet('/mock/ajax/single/get').reply(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, orgs]);
            }, 2000);
        });
    });
    mock.onGet('/mock/ajax/single/get2').reply(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, orgs]);
            }, 2000);
        });
    });
    mock.onPost(mockUrls.ajaxPost).reply(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, orgs]);
            }, 2000);
        });
    });
}
