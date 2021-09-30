import Info from '../Info'
import {useState ,useDrag} from 'react'
import Card from '../Card'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const ItemTypes = {
    Card: 'Card'
  }

const Cards = () => { 
    const [state,setState]=useState(Info)

    return (
        <Card states={state}/>            
   
    )
}
export default Cards
