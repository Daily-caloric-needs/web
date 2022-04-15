import { Avatar } from '../Avatar/Avatar';
import { Notification } from '../Notification/Notification';
import { Search } from '../Search/Search';

import { Sidebar } from '../Sidebar/Sidebar';

export const Home = () => {

   return (
      <div className="content">Home Page
         <div className="content__header">
            <Sidebar />
            <Search />
            <Notification />
            <Avatar />
         </div>
         <div className="content__main">
            <div className="content__left">
            </div>
         </div>
      </div>
   );
};
