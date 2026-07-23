

const Student = (props) => {
  return (
    <>
    <h1>Name:{props.name}</h1>
    <h1>Age:{props.age}</h1>
    <h1>Course:{props.course}</h1>
    <h2>Status:{props.isPlaced? "Placed":"Not Placed"}</h2>
    </>
  )
}

export default Student