class Http {
    constructor() {
        this.API = 'http://localhost:3000/';
    }

    async get(url) {
        const responce = await fetch(`${this.API}${url}`).then(responce => responce.json());
        return responce;
    }
    
    async post(url, params) {
        await fetch(`${this.API}${url}`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }
}

export default Http;