export interface myaccount  {
    courseId:object,
    progress:number,
    certificate:number
}

export interface kycDocumentType {
  panCard:string,
  status:"Pending"|"Approved"|"Rejected"
}

export interface accountDetailsType {
    bankName:string,
    account:number,
    IFSC:string,
    holderName:string,
}

export interface addressType {
        state:String,
        district:String,
        pincode:Number,
        postaladdress:String
    }

export interface IUser {
  fullName: string,
  email: string,
  phone: string,
  password: string,
  isFeatured:boolean,
  refreshToken?: string,
  isBlock: boolean,
  role: "Student",
  avatar:string,
  verifiedToken:string,
  verifiedDate:string,
  status:"Active"|"Deactive",
  isVerified:object,
  comparePassword(password: string): boolean, // Password Compare
  wallet:number,
  totalEarning:number,
  wishlist:[],
  mycourses:myaccount[],
  joiningDate:Date,
  kycDocument:kycDocumentType,
  sponsor:string  //  sponsored id
  sponsorby:object  // parent _id
  isEarnable:boolean
  accountDetails:accountDetailsType
  address:addressType,
}