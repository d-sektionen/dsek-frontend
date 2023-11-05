const BASE_URL = 'http://ssh.new.d-sektionen.se:1337/api/';

export async function getBlogposts() {
    try {
        const response = await fetch(`${BASE_URL + 'blogposts?populate=*'}`);
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

export async function getBlogpost(slug) {
    try {
        const response = await fetch(`${BASE_URL + 'blogposts?filters[slug][$eq]='}${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        throw error;
    }
}

export async function getUtskott(slug) {
    try {
        const response = await fetch(`${BASE_URL + 'utskotts?filters[slug][$eq]='}${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        throw error;
    }
}