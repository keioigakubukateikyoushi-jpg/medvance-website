import { siteUrl } from "./seo";

export type Tutor = {
  slug: string;
  name: string;
  role: string;
  university: string;
  faculty: string;
  grade: string;
  background: string;
  specialties: string[];
  message: string;
  photoUrl?: string;
};

export const tutors: Tutor[] = [];

export function buildPersonSchemas() {
  return tutors.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/about#tutor-${t.slug}`,
    name: t.name,
    jobTitle: t.role,
    description: t.background,
    knowsAbout: t.specialties,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: t.university,
    },
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    ...(t.photoUrl ? { image: `${siteUrl}${t.photoUrl}` } : {}),
  }));
}
