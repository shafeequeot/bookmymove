import React from 'react'
import Heading from '../global/heading'
import services from '../../pages/api/servciesLists'
import ItemLists from '../global/itemLists'


function AllServiceList() {



    return (
        <>

        <div className='container m-auto flex flex-row gap-2 md:gap-4 flex-wrap my-2 md:my-4 text-white'>
            <ItemLists title="Moving & Storage"  item={services?.MovingAndStorage}/>
            <ItemLists title="Packing and Moving Service" item={services?.PackingAndMovingService}/>
            <ItemLists title="Office moving in Dubai" item={services?.OfficeMovingInDubai}/>
            <ItemLists title="International moving from Dubai" item={services?.InternationalMovingFromDubai}/>
            <ItemLists title="Storage in Dubai" item={services?.StorageInDubai}/>
            <ItemLists title="Other Services" item={services?.OtherServices}/>
        </div>
        </>
    )
}

export default AllServiceList