class Http {
    constructor() {
        this.API = 'http://localhost:3000';
    }

    async get(url) {
        const response = await fetch(`${this.API}${url}`).then(response => response.json());
        return response;
    }
    
    async post(url, params) {
        await fetch(`${this.API}${url}`, {
            method: 'POST',
            body: JSON.stringify(params),
        })
    }
}

export default Http;