import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { PageContainer } from "@/components/dashboard/page-shell"
import { getApplications } from "@/lib/api/applications"

import { ApplicationsBoard } from "./_components/applications-board"

export default async function MyApplicationsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const applications = await getApplications(`applicantId=${session?.user.id}`)

  return (
    <PageContainer width="wide">
      <ApplicationsBoard applications={applications} />
    </PageContainer>
  )
}
