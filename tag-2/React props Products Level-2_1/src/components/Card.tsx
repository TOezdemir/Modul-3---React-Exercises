interface CardProps {
    image: string,
    name: string,
    price: string,
}

function Card (props: CardProps){
return <div className="flex card card-compact bg-base-100 w-1/3" >
    <div><img src={props.image} alt="" /></div>
    <div className="card-body text-center font-serif">
        <h2 className="card-title justify-center text-[14px] font-normal">{props.name}</h2>
        <p className="text-[14px]">{props.price}</p>
        <div className="card-actions justify-center font-sans">
            <button className="btn bg-secondary uppercase w-60">Buy now</button>
        </div>
    </div>
    
    
</div>
}

export default Card