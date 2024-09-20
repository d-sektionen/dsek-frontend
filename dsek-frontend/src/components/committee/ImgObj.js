import '../../css/committee/ImgObj.css'

function ImgObj(props) {
  return (
    <div className="ImgObj">
        <h1 className="ImgObj-Title">{props.title}</h1>
        <img className="ImgObj-Img" src={props.img}/>
        <p className="ImgObj-Desc">{props.description}</p>
    </div>
  );
}

export default ImgObj;