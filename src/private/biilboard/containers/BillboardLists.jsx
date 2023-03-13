import { BillboardList } from "../components/BillboardList"


export const BillboardLists = ({billboardList}) => {
  console.log(billboardList)
  return (
    <div className="cards-container-billboard ">
      {
        billboardList.map((bill,i)=>(
            <BillboardList key={i} {...bill}/>
        ))
      }

    </div>

  )
}
