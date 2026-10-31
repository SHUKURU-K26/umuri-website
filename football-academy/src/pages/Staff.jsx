import PageHeader from '../components/ui/PageHeader'
import StaffCard from '../components/shared/StaffCard'
import { staff } from '../data/academy'

export default function Staff() {
  return (
    <>
      <PageHeader eyebrow="Staff" title="The people behind the players" text="Our coaches and support team." />
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staff.map((m, i) => <StaffCard key={m.id} member={m} index={i} />)}
        </div>
      </section>
    </>
  )
}