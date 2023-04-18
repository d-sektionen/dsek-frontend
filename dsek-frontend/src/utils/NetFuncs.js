export async function getPage(file) {
    const res = await fetch("http://127.0.0.1:3000/fake-cms/" + file + ".md");
    return res.text();
}

export async function getData(file, search = "") {
    const r = await fetch("http://127.0.0.1:3000/fake-cms/" + file + ".json");
    const data = await r.json();
    if (search === "")
        return data;

    // Parse search into regex string
    let searchRegexStr = "";
    for (const searchIdx in search) {
        const ch = search.charAt(searchIdx);
        searchRegexStr += `[${ch.toLowerCase()}${ch.toUpperCase()}]`
    }
    let searchRegex = new RegExp(searchRegexStr, 'g');

    search = search.toLowerCase();
    const found = data.filter(post => post.title.toLowerCase().includes(search) || post.content.toLowerCase().includes(search));
    for (const e of found) {
        let indices = [];
        let match = searchRegex.exec(e.content);
        while (match != null) {
            indices.push(match.index);
            match = searchRegex.exec(e.content);
        }

        let prevIdx = 0;
        let newContent = "";
        for (let idx of indices) {
            let word = e.content.slice(idx, idx + search.length);
            newContent += e.content.slice(prevIdx, idx) + "<b>" + word + "</b>";
            prevIdx = idx + search.length;
        }
        newContent += e.content.slice(prevIdx);

        e.content = newContent;
    }
    return found;
}