import React from 'react'
 
const List = React.memo(({handleIncrement}) =>{
   console.log("the useCallback are run contunuously");
  return (
    <div>List

<button onClick={handleIncrement}> handleClick button</button>

    </div>
  )

}
)

export default List