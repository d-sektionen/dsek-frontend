export async function getData2(file){
    // const r = await fetch("http://127.0.0.1:4000/api/posts/"+file);
    console.log("her3");
    const r = await fetch("http://localhost:4000/api/posts");
    console.log("here2", r);
    return await r.json();
}

(async () => { 
    const data = await getData2("posts");
    console.log("here");
    console.log(data);
})();

// ta bort sen
export async function getData(file){
    const r = await fetch("http://127.0.0.1:3000/fake-cms/"+file+".json");
    return await r.json();
}