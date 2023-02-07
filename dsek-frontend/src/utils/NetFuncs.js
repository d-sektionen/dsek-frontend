import qs from 'qs';

export async function getData2(path, query){
    const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true });
    const r = await fetch(`http://localhost:4000/api/${path}${stringifiedQuery}`);
    return await r.json();
}

(async () => { 
    const query = {
        page: 2,
        limit: 2
    };
    const data = await getData2("posts", query);
    console.log(data);
})();

// ta bort sen
export async function getData(file){
    const r = await fetch("http://127.0.0.1:3000/fake-cms/"+file+".json");
    return await r.json();
}