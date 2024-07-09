import ListBuilder from "./list-builder.jsx"

function Regions(){

    const regions = [
        {
            ID : 1,
            name : 'Michigan',
            about : 'Upper Midwest state amongst the Great Lakes. Diverse terrain mixing marshland with mountainous regions and everything in between'
        },
        {
            ID : 2,
            name : 'Alaska',
            about : 'Northerly US state. Frozen Oilfields, dense forests and lakes all under a blanket of snow.'
        },
        {
            ID : 3,
            name : 'Taymyr',
            about : 'Northern Siberian peninsula, extremely isolated region where oil drilling and speculation is underway. Mixing low wetlands, swamps and woodlands'
        }
    ]
    
    return(
        <ListBuilder
            listName = 'Regions'
            items = {regions}
        />
  )

}

export default Regions;