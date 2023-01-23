import FormSearch from "./atom/FormSearch"

const Footer = () => {
  return (
    <div className="w-320 h-29 bg-footer-img bg-no-repeat mx-auto">
      <div className="h-128 flex flex-col justify-center items-center my-auto">
        <FormSearch/>
      </div>
    </div>
  )
}

export default Footer