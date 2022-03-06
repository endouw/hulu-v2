import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./Headeritem";

function Header() {
  return (
      
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
       <div className="flex flex-grow justify-evenly max-w-2xl">
           <HeaderItem title='HOME' Icon={HomeIcon}/>
           <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
           <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
           <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
           <HeaderItem title='SEARCH' Icon={SearchIcon}/>
           <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
       </div>
        <Image 
         className="object-contain"
         src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" width={100} height={100}
        alt="header-image"/>
    </header>
  )
}

export default Header