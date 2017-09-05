export const getTodos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [{
                    text: 'learning English',
                    compeleted: false,
                    id: 1234
                }, {
                    text: 'learning French',
                    compeleted: false,
                    id: 1235
                }, {
                    text: 'learning Latin',
                    compeleted: false,
                    id: 1236
                }, {
                    text: 'learning Chinese',
                    compeleted: true,
                    id: 1237
                }, {
                    text: 'learning Japanese',
                    compeleted: false,
                    id: 1238
                }]
            })
        }, 1000);
    });
};