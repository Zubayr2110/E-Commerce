export const getUser = () => {
    return localStorage.getItem(user) ? JSON.parse(localStorage.getItem(user)) : false
};
export const getProducts = () => {
    return localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
};