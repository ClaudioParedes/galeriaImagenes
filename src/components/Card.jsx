const Card = ({title, descript, source}) => {
return (
    <div style={{ border: "solid"}}> 
     <h1>{ title }</h1>
     <h4>{ descript }</h4>
     <img src={ source }/>
    </div>
);
};
export default Card;
