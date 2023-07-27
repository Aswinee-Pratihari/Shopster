import React from 'react'

const TabName = (props) => {
    document.title=`Shopster  `+props.title
  return (
    <div>{props.children}</div>
  )
}

export default TabName