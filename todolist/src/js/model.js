export const getTodos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [{
                    text: 'learn English',
                    compeleted: false,
                    id: 1234
                }, {
                    text: 'learn French',
                    compeleted: false,
                    id: 1235
                }]
            })
        }, 1000);
    });
};