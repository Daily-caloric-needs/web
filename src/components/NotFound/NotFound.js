import { Avatar } from '../Avatar/Avatar';
import { Notification } from '../Notification/Notification';
import { Sidebar } from '../Sidebar/Sidebar';

export const NotFound = () => {

   return (
      <div className="content">
         <div className="content__header">
            <Sidebar />
            <Notification />
            <Avatar />
         </div>
         <div className="content__main">
            <h1>Страница не найдена</h1>
            <div className="content__left">
            </div>
         </div>
      </div>
   );
};
