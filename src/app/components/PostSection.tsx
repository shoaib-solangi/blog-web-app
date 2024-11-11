
"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { app } from '@/firebase/firebaseConfig';
import Link from 'next/link';

// Define the type for blog data
interface Blog {
  id: string;
  blogTitle: string;
  blogDescription: string;
  blogCateg: string;
  imageUrl?: string;
}

interface PostSectionProps {
  categ: string;
}

const PostSection: React.FC<PostSectionProps> = ({ categ }) => {
  const db = getFirestore(app);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  console.log(categ);
  
  useEffect(() => {

    const q = categ && categ !== "All"
    ? query(collection(db, "Blogs"), where("blogCateg", "==", categ))
    : collection(db, "Blogs");

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const filteredBlogs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Blog));
        setBlogs(filteredBlogs);
      },
      (error) => {
        console.error("Error fetching blogs:", error);
      }
    );
    console.log(blogs);
    

    return () => unsubscribe();
  }, [db, categ]);

  return (
    <div className="flex justify-center py-8 bg-gray-900">
      <div className="w-[95%] max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {blogs.map((blog) => (
           <Card key={blog.id} className="w-full max-w-[350px] bg-white rounded-lg shadow-lg flex flex-col justify-between">
           <CardHeader>
             <Image
               src={blog.imageUrl || "/placeholder-image.jpg"}
               width={500}
               height={500}
               alt={blog.blogTitle}
               className="rounded-lg"
             />
           </CardHeader>
           <CardContent className="p-4 flex-grow">
             <CardTitle className="text-lg font-semibold">{blog.blogTitle}</CardTitle>
             {/* You can re-enable this part if you want to display the description */}
             {/* <CardDescription className="mt-2 text-gray-600">
               {blog.blogDescription}
             </CardDescription> */}
           </CardContent>
           <CardFooter className="p-4 flex justify-end mt-auto">
           <Link href={`ViewBlog/${blog.id}`}><Button className="bg-blue-500 text-white hover:bg-blue-600">Read More</Button></Link>
           </CardFooter>
         </Card>
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
