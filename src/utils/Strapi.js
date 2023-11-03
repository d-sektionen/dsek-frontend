const BASE_URL = 'http://ssh.new.d-sektionen.se:1337/api/';

export async function getBlogposts() {
    try {
        const response = await fetch(`${BASE_URL + 'blogposts'}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getBlogpost(id) {
    try {
        const response = await fetch(`${BASE_URL + 'blogpost'}/:${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching post with id ${id}:`, error);
        throw error;
    }
}