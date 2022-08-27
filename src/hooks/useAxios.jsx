export const useAxios = async (url, method, data) => {
    const res = await axios({
        url,
        method,
        data,
    });
    return res.data;
}