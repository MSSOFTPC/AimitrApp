export interface NotificationType {
    _id:string,
  customerId: object;                    // Jisko notification bhejna hai
  title: string;                     // Notification ka title
  message: string;                   // Notification ka main content
  status: "Unread" | "Read";        // Read/unread status
  link?: string;                    // Optional: related link
  createdAt?: Date;                  // Notification ka creation date
  updatedAt?: Date;                  // Update date agar change hua ho
}
