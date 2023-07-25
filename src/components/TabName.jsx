import React from 'react'

const TabName = (props) => {
    document.title=`Shopify  `+props.title
  return (
    <div>{props.children}</div>
  )
}

export default TabName