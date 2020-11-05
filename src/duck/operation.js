import Actions from '../duck/action';
import { store } from '../store'

const loginUser = async (json) => {
    let url = `https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth`;
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const resp = await fetchResponse.json();
        if (resp?.status === "success") {
            let userResp = resp?.data;
            store.dispatch(Actions.getActiveUser(userResp?.activeUsers));
            store.dispatch(Actions.getInActiveUser(userResp?.inactiveUsers));
            store.dispatch(Actions.getUserList(userResp?.userLogs));
            localStorage.setItem("isUserAuth", JSON.stringify(true))
            localStorage.setItem("userLogsList", JSON.stringify(userResp?.userLogs))
            localStorage.setItem("activeUsers", JSON.stringify(userResp?.activeUsers))
            localStorage.setItem("inactiveUsers", JSON.stringify(userResp?.inactiveUsers))
        } else {
            console.log(resp?.status)
            localStorage.setItem("isUserAuth", JSON.stringify(false))
        }
        return resp;

    } catch (e) {
        return e;
    }
}

export default { loginUser }