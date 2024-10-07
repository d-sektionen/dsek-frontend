const BASE_URL = "https://strapi.d-sektionen.se/api/";

async function fetchData(endpoint, slug) {
  try {
    let url = `${BASE_URL}${endpoint}`;
    if (slug) {
      url += `?filters[slug][$eq]=${slug}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return slug ? data.data[0] : data.data;
  } catch (error) {
    console.error(
      `Error fetching data from ${endpoint} with slug ${slug}:`,
      error,
    );
    throw error;
  }
}

export function getBlogposts() {
  //fetchs all blog posts and populate all relations
  return fetchData("blogposts?populate=*");
}

export function getBlogpost(slug) {
  return fetchData("blogposts", slug);
}

export function getUtskott(slug) {
  return fetchData("utskotts", slug);
}

export function getPage(slug) {
  return fetchData("pages", slug);
}

export function getDocuments() {
  return fetchData("upload/files");
}

export function getExjobbs() {
  return fetchData("exjobbs?populate=*");
}

export function getExjobb(slug) {
  return fetchData("exjobbs", slug);
}

/*
const BASE_URL = 'https://strapi.d-sektionen.se/api/';

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

export async function getPage(slug) {
    try {
        const response = await fetch(`${BASE_URL + 'pages?filters[slug][$eq]='}${slug}`);
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

export async function getDocuments() {
    try {
        const response = await fetch(`${BASE_URL + 'upload/files'}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
}

export async function getExjobbs() {
    try {
        const response = await fetch(`${BASE_URL + 'exjobbs?populate=*'}`);
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

export async function getExjobb(slug) {
    try {
        const response = await fetch(`${BASE_URL + 'exjobbs?filters[slug][$eq]='}${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        throw error;
    }
}*/
