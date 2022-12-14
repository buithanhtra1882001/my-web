import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { UilAngleDown } from '@iconscout/react-unicons'
import { Heading14 } from "../../text";
import { listMenu } from "../data";
import { SubMenu } from "./subNav";

const NavbarContainter = styled.div`
  ${tw`
        flex
        flex-row
        items-center
        justify-center
    `}
`;
const NavbarContent = styled.div`
  ${tw`
        flex
        flex-row
        items-center
        py-4
        justify-between
        space-x-6
    `}
`;
export const MenuItem = styled.div`
  ${tw`
        relative
        flex
        items-center
        gap-x-2
        hover:cursor-pointer
    `}
`;

export function Navbar() {
  const {listCategories} = useSelector(state => state.category)
  if(listCategories != null) {
    listMenu[1].subMenu = listCategories.items
  }
  const [display, setDisplay] = useState("hidden")
  const [index1, setIndex1] = useState()
  const showSubMenu = (index) => {
    setDisplay("block")
    setIndex1(index)
  }
  const hideSubMenu = () => {
    setDisplay("hidden")
  }
  const navigate = useNavigate()
  return (
    <NavbarContainter>
        <NavbarContent>
            {listMenu.map((item, index) => {
                return(
                    <MenuItem key={index} onClick={() => navigate(item.path) } onMouseOver={() => showSubMenu(index)} onMouseLeave={hideSubMenu}>
                        <Heading14 key={index}>{item.name}</Heading14>
                        {item.subMenu.length>0 && 
                            <UilAngleDown size="9" color="#818181"></UilAngleDown> 
                        }
                        {item.subMenu.length>0 && index1 == index &&
                            <SubMenu display={display} data={item.subMenu}></SubMenu> 
                        }             
                    </MenuItem>
                )
            })}
        </NavbarContent>
    </NavbarContainter>
  );
}
