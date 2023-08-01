import { Category } from "./category";
import { CourseLanguage } from "./course-language";
import { CourseLevel } from "./course-level";

export class Course {
    constructor(
      public id:string,
      public title:string,
      public alias:string,
      public shortDescription:string,
      public courseDescription:string,
      public badgeSeller:string,
      public viewCount:number,
      public createdTime:Date,
      public updatedTime:Date,
      public enabled:boolean,
      public cost:number,
      public price:number,
      public discountPercent:number,
      public imageUrl:string,
      public videoUrl:string,
      public category:Category,
      public requirement:string,
      public courseLevel :CourseLevel,
      public courseLanguage : CourseLanguage,
      public reviewCount:number,
      public averageRating:number
      ){}
}
// "id": 2,
//     "title": "2sss== Beginner",
//     "shortDescription": "test post this short description",
//     "courseDescription": "test post Hello this is course description",
//     "badgeSeller": "test post Best price",
//     "viewCount": 1290,
//     "createdTime": "2023-07-31 04:36:42",
//     "updatedTime": "2023-07-31 04:36:42",
//     "enabled": true,
//     "cost": 180.00,
//     "price": 180.00,
//     "isFree": true,
//     "discountPercent": 10,
//     "imageUrl": "test post image.url",
//     "videoUrl": "test post video.url",
//     "category": {
//         "id": 1,
//         "name": "Programming"
//     },
//     "requirement": "test with save video",
//     "courseLevel": {
//         "id": 1,
//         "name": "Beginner"
//     },
//     "courseLanguage": {
//         "id": 1,
//         "name": "khmer"
//     },
//     "curriculum": [
//         {
//             "id": 1,
//             "name": "Introduction",
//             "lecture": [
//                 {
//                     "id": 3,
//                     "title": "Introduction to JDK",
//                     "description": "thisi is description",
//                     "freePreview": true,
//                     "video": [],
//                     "attachments": []
//                 },
//                 {
//                     "id": 2,
//                     "title": "Introduction to java",
//                     "description": "thisi is description",
//                     "freePreview": true,
//                     "video": [],
//                     "attachments": []
//                 },
//                 {
//                     "id": 1,
//                     "title": "Introduction",
//                     "description": "thisi is description",
//                     "freePreview": true,
//                     "video": [],
//                     "attachments": []
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "name": "Install IDE",
//             "lecture": []
//         }
//     ],
//     "reviewCount": 18022,
//     "averageRating": 5
