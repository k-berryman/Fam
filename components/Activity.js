import Stories from "./Stories";
import Posts from "./Posts";

function Activity() {
  return (
    <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-6xl mx-auto">
      {/* Stories */}
      <Stories />

      {/* Posts & Comments */}
      <Posts />
    </div>
  )
}

export default Activity
