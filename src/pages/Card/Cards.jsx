import Card from "./Card";


export default function Cards({ data }) {
    
  return (
    <div>
        {data.map((item) => <Card key={item.id} {...item}/>)}
    </div>

  )
}
