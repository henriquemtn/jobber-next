"use client";

// * Next
import React from "react";
import { useParams } from "next/navigation";

// * Components
import TopTitle from "@/components/top-title";
import Briefing from "@/components/jobs/briefing";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ArchieveComponent from "@/components/jobs/archive";
import FollowersComponent from "@/components/jobs/followers";
import JobApontamentos from "@/components/jobs/apontamentos";
import JobDescription from "@/components/jobs/description/description";

// * Hooks & Utils
import { useQuery } from "@tanstack/react-query";
import { fetchJobById } from "@/services/models/jobs";
import Comments from "@/components/jobs/comments";
import NotesModal from "@/components/modals/notesModal";
import {
  ICustomerData,
  IPackageData,
  IRequestData,
  IStatusData,
  IUserData,
} from "@/models";

export default function JobDetails() {
  const params = useParams<{ jobId: string }>();

  const { data: job, isLoading } = useQuery({
    queryKey: ["jobs", params?.jobId],
    queryFn: async () => {
      if (params?.jobId) {
        const jobId = parseInt(params.jobId, 10);
        return await fetchJobById(jobId);
      }
      return null;
    },
    enabled: !!params?.jobId,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  if (!job) {
    return <div>Job não encontrado</div>;
  }

  return (
    <main className="flex flex-col min-h-screen gap-4 px-4 py-4 md:px-0 md:ml-20 mt-[60px] lg:gap-6 lg:p-6">
      <NotesModal />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Detalhes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{job.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col w-3/4 gap-4 md:space-y-0">
          <div className="bg-white dark:bg-[#1F1E22] w-full p-4 rounded-md shadow-lg mr-4">
            <TopTitle
              label={job.title || "Default Title"}
              status={job.status}
            />
            <JobDescription
              id={job.id}
              customer={job.customer ?? ({} as ICustomerData)}
              responsible={job.responsible ?? ({} as IUserData)}
              requester={job.requester ?? ({} as IUserData)}
              user_created={job.user_created ?? ({} as IUserData)}
              project={job.project ?? null}
              package_consumption={job.package_consumption ?? 0}
              package_date={job.package_date ?? null}
              bonus={job.bonus ?? null}
              package={job.package ?? ({} as IPackageData)}
              status={job.status ?? ({} as IStatusData)}
              request={job.request ?? ({} as IRequestData)}
              followers={job.followers ?? []}
              title={job.title ?? "Default Title"}
              briefing={job.briefing ?? ""}
              estimated_time={job.estimated_time ?? 0}
              minutes_per_day={job.minutes_per_day ?? 0}
              qtd_days={0}
              budget={job.budget || false}
              start={job.start || ""}
              finish={job.finish || null}
              is_finished={job.is_finished || false}
              internal_term={job.internal_term || ""}
              customer_term={job.customer_term || ""}
              date_created={job.date_created || ""}
              date_updated={job.date_updated || ""}
            />
            <Briefing content={job.briefing || ""} />
          </div>
          <Comments job={job} />
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <JobApontamentos job={job} />
          <FollowersComponent />
          <ArchieveComponent />
        </div>
      </div>
    </main>
  );
}
