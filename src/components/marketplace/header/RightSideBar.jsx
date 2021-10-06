import _ from 'lodash';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Button3E } from '../../globals/Button';
import { randomString } from '../../../scripts/randomHelpers';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard, AiTwotoneShop } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { FiHelpCircle } from 'react-icons/fi';
import { FaProductHunt } from 'react-icons/fa';
import { ListColumn, Item } from "../../globals/List";


export const RightSideBar = ({ openSideBar, setOpenSideBar }) => {
  const items = [
    {to: "/", icon: <AiOutlineDashboard/>, text: "Dashboard"},
    {to: "/", icon: <AiTwotoneShop/>, text: "Marketplace"},
    {to: "/", icon: <FiHelpCircle/>, text: "Help"},
    {to: "/", icon: <FaProductHunt/>, text: "Product"}
  ];

  const padding = {
    padding: "12px 24px 12px 50px"
  };

  const ref = useDetectClickOutside({ onTriggered: (e) => {
    const rsbContainer = ref.current.querySelector('div#right-side-bar-nav');
    if (rsbContainer.getBoundingClientRect().left < window.innerWidth) {
      setOpenSideBar(false);
    }
  }});

  const animate = {
    right: openSideBar ? "0":"-100%", 
    transition: "0.25s"
  }

  return (
    <div className="relative " ref={ref}>
      <div className="fixed top-0 bottom-0 left-auto h-screen w-4/5 bg-gray5"
      id="right-side-bar-nav" style={animate}>
        <ListColumn className="mt-10">
          {_.map(items, (item) => {
            return (
              <Item key={randomString(8)}>
                <Link to={item.to} className="flex items-center text-white w-full" style={padding}>
                  <div className="flex items-center text-xl">
                    {item.icon}
                  </div>
                  <div className="ml-4 text-base">
                    {item.text}
                  </div>
                </Link>
              </Item>
            )
          })}
          <Item>
            <div style={padding}>
              <Button3E className="text-white bg-primary4 py-2 px-5 mt-8 rounded border border-primary4">
                <BiLogIn />
                <span>Login</span>
              </Button3E>
            </div>
          </Item>
        </ListColumn>
      </div>
    </div>
  );
};