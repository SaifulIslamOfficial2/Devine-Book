
import { GoSearch } from "react-icons/go"


function LeftSearchBar() {
  return (
    <div className="relative w-[160px] flex items-center cursor-pointer">
    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
      <GoSearch />
    </span>
    <input
      type="text"
      placeholder="Quick search..."
      className="pl-10 border text-gray-500 border-[#5EE7BA] py-2 w-full rounded-lg focus:outline-none focus:placeholder-transparent"
    />
  </div>
  )
}

export default LeftSearchBar