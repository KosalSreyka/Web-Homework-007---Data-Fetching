import Card from "@/components/Card";
import CardAction from "@/components/CardAction";
import CardAnimie from "@/components/CardAnimie";
import CardDrama from "@/components/CardDrama";
import CardFiction from "@/components/CardFiction";
import CardHollywood from "@/components/CardHollywood";

import React from "react";


const page = async () => {
  return (
    
     <div>
           <img src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x%7CimageMogr2/thumbnail/600x" alt="Background Image" className="object-cover object-top w-full h-[720px]" />
           <div
              className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
           </div> 
           <Card/>
           <CardAction/>
           <CardDrama/>
           <CardFiction/>
           <CardAnimie/>
           <CardHollywood/>
        
           

     </div>
  );
};

export default page;
