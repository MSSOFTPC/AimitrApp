export interface ILesson {
  title: string;                  // Lesson ka title
  slug: string;                   // URL-friendly
  description?: string;            // Optional detail
  videos?: {link:string,language:string}[];               // Videos for multiple languages
  resources?: string[];            // PDFs, docs, etc.
  duration?: number;               // e.g., "12m 30s"
  courseId: object;                // Parent course ID
  createdAt: Date;
  updatedAt?: Date;
  status?: "Draft"|"Published";           // Draft/Published
  attachmentFiles?: string[];      // Additional files
}