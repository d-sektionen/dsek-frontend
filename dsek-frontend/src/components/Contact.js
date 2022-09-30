function BodySimple({html, children}) {
    return (
        <div className="Article">
            <div className="Rich-Text" dangerouslySetInnerHTML={{ __html: html }}></div>
            {children}
        </div>
    );
  }
  
export default BodySimple;