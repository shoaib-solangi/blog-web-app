// "use client"
// import React, { useState } from "react";
// import PostSection from "../components/PostSection";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import PrivateRoute from "../HOC/PrivateRoute";

// function Page() {
//     const [categ, setCateg] = useState("All")
//     console.log(categ);
    
    
//   return (
//     <PrivateRoute>
//     <div className="bg-gray-900">
//       <Header />
//       {/* <div className="flex justify-center">
//         <div className="mb-8 w-[95%] max-w-6xl">
//           <h3 className="text-white font-bold text-3xl border-b-2 border-white py-2 inline-block text-center lg:text-left">
//             All Blog
//           </h3>
//         </div>
//       </div> */}
//       <div className="flex justify-center">
//         <div className="w-[95%] flex justify-between items-center max-w-6xl">
//           <div>
//             <h2 className="text-white font-bold text-2xl">All Blog</h2>
//           </div>
//           <div>
//             <span>Search:</span>
//             <Select onValueChange={(value)=>{setCateg(value)}}>
//               <SelectTrigger className="w-[180px] text-white">
//                 <SelectValue placeholder="Select a fruit" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Category</SelectLabel>
//                   <SelectItem value="Technology">Technology</SelectItem>
//                   <SelectItem value="Health & Wellness">
//                     Health & Wellness
//                   </SelectItem>
//                   <SelectItem value="Travel">Travel</SelectItem>
//                   <SelectItem value="Lifestyle">Lifestyle</SelectItem>
//                   <SelectItem value="Sports">Sports</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       <PostSection />
//       <Footer />
//     </div>
//     </PrivateRoute>
//   );
// }

// export default Page;
"use client";
import React, { useState } from "react";
import PostSection from "../components/PostSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PrivateRoute from "../HOC/PrivateRoute";

function Page() {
  const [categ, setCateg] = useState("All");
  console.log(categ);
  

  return (
    <PrivateRoute>
      <div className="bg-gray-900">
        <Header />
        <div className="flex justify-center">
          <div className="w-[95%] flex justify-between items-center max-w-6xl">
            <div>
              <h2 className="text-white font-bold text-2xl">All Blog</h2>
            </div>
            <div>
              <span>Search:</span>
              <Select onValueChange={(value) => setCateg(value)}>
                <SelectTrigger className="w-[180px] text-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                    <SelectItem value="Travel">Travel</SelectItem>
                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <PostSection categ={categ} />
        <Footer />
      </div>
    </PrivateRoute>
  );
}

export default Page;
