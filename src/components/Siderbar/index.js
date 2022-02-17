import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';


const Sidebar = ({ isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon>
               <CloseIcon/>
           </Icon>
           <SidebarMenu>
               <SidebarLink to="/">Burgers</SidebarLink>
               <SidebarLink to="/">Desserts</SidebarLink>
               <SidebarLink to="/">Salads</SidebarLink>
               <SidebarLink to="/">Drinks</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to="/">Order</SidebarRoute>
           </SideBtnWrap>
       </SidebarContainer>
    )
}

export default Sidebar;