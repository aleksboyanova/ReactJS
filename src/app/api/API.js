import Constants from '../constants/Constants';
import axios from 'axios';

const API = {
    get(baseURL, url, success, error) {
        return this.request({
            baseURL,
            method: "GET",
            url,
            success,
            error
        })
    },
    post(baseURL, url, data, success, error) {
        return this.request({
            baseURL,
            method: "POST",
            url,
            data,
            success,
            error
        })
    },
    put(baseURL, url, data, success, error) {
        return this.request({
            baseURL,
            method: "PUT",
            url,
            data,
            success,
            error
        })
    },
    delete(baseURL, url, success, error) {
        return this.request({
            baseURL,
            method: "DELETE",
            url,
            success,
            error
        })
    },
    request: (options = {}) => {
        if (!options.url) {
            alert('URL is not set!');
            return;
        }

        if (options.params === undefined) {
            options.params = {};
        }

        // const api_token = 'hardcoded_token';

        // if(api_token)
        // {
        //     data.params = Object.assign(data.params, {api_token: api_token});
        // }

        return new Promise((resolve, reject) => {
            axios(options).then(response => {
                if (options.success) {
                    options.success(response.data);
                }
                resolve(response.data);
            })
                .catch(error => {
                    if (options.error) {
                        options.error(error);
                    }
                    reject(error);
                })
        })
    }
}

export default API;