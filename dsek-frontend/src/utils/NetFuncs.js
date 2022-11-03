export async function getData(file){
    const r = await fetch("http://127.0.0.1:3000/fake-cms/"+file+".json");
    return await r.json();
}