import { FaCircleCheck } from 'react-icons/fa6'
import SectionCard from '../common/SectionCard'
import SectionHeading from '../common/SectionHeading'

const PackageHighlights = ({ highlights = [] }) => {
  if (!highlights.length) return null

  return (
    <SectionCard>
      <SectionHeading title="Package Highlights" />
      <div className="grid gap-3 sm:grid-cols-2">
        {highlights.map((highlight, index) => (
          <div key={`${highlight.title || highlight.text}-${index}`} className="flex gap-3 rounded-lg bg-slate-50 p-4">
            <FaCircleCheck className="mt-1 shrink-0 text-orange-500" />
            <p className="font-bold text-slate-700">{highlight.title || highlight.text}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

export default PackageHighlights
