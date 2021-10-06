import { useState } from 'react';
import { IconImage24, Image } from '../../globals/Image';
import { Dropdown3E } from '../../globals/Dropdown';
import { RightSideBar } from './RightSideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../../static/images/logo.png';
import _tabAxie from "../../../static/images/tab-axie.png";
import _tabLand from '../../../static/images/tab-land.png';
import _tabItem from '../../../static/images/tab-item.png';
import _tabBundle from '../../../static/images/tab-bundle.png';

const categories = [
  { id: Math.random().toString(36).substr(2, 9), mid: 'Axies', start: <IconImage24 src={_tabAxie}/>, to: 'axies' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Lands', start: <IconImage24 src={_tabLand}/>, to: 'lands' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Items', start: <IconImage24 src={_tabItem}/>, to: 'items' },
  { id: Math.random().toString(36).substr(2, 9), mid: 'Bundles', start: <IconImage24 src={_tabBundle}/>, to: 'bundles' },
];

const CategoryDropDown = () => {
  return (
    <div>
      <Dropdown3E
        menu={categories}
        selected="0"
        toggleClass="px-2.5 py-2 bg-gray3 text-white rounded w-160px font-bold"
        menuClass="bg-gray3 w-full mt-1 rounded"
        itemClass="px-2.5 py-2 bg-gray3 text-white font-bold w-full"
      />
    </div>
  );
};

export const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <header>
      <div className="flex w-full bg-gray6">
        <RightSideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        <div className="px-3 py-2">
          <Image src={logo} width="66px" height="36px"/>
        </div>
        <div className="ml-auto px-5 flex items-center text-white text-xl" onClick={() => setOpenSideBar(true)}>
          <GiHamburgerMenu/>
        </div>
      </div>
      <div className="flex justify-between px-2 py-2.5 bg-gray5">
        <CategoryDropDown/>
      </div>
    </header>
  )
}