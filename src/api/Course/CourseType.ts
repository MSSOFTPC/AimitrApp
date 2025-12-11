export interface reviewsUserType {
  avatar:string,
  fullName:string
} 
export interface reviewsType {
    _id:string,
    studentId: reviewsUserType;
    rating: number;
    comment?: string;
    date: Date;
} 
export interface ICoursetype {
  _id:string,
  title: string,
  slug: string,
  totalDuration:number,
  lesssonsCount:number,
  description: string,
  introduction:string,
  category: string[],
  price: number,
  sale: number,   // after sponsored me show hoga
  featuredImage:string,
  introvideo:string,
  gallery?:[],
  viewed:number,
  rated:number,
  isFeatured?: boolean; 
  reviews?: reviewsType[];
  type:"Single"|"Group",
  duration?: number;
  group?:string[]  // product ids,
  createdAt:Date,
  lessons:string[],
  instructor:object // id from instructor
  enrolledStudents?: string[]
  level:"Intermediate"|"Beginner"|"Expert",
  prerequisites?: string;
  status?: "Draft" | "Published";
  languages?: [];
  income:{
      parent:number,
      grandParent:number
  }
}