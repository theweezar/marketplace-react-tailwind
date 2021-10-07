import _ from "lodash";
import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaAngleDown } from "react-icons/fa";
import { Button3E } from "./Button"
import { ListColumn, Item } from "./List";
import { randomString } from "../../scripts/randomHelpers";

export const Dropdown3E = ({ selected, menu, onItemClick, toggleClass, menuClass, itemClass }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [_selected, setSelected] = useState(selected || 0);
  const itemOnClick = (index, event) => {
    setSelected(index);
    setIsDrop(false);
    if (typeof onItemClick === 'function') {
      onItemClick(event);
    }
  }
  const ref = useDetectClickOutside({ onTriggered: () => {
    setIsDrop(false);
  }});
  return (
    <div ref={ref}>
      <Button3E onClick={() => setIsDrop(!isDrop)} className={toggleClass}>
        {menu[_selected].start}
        {menu[_selected].mid}
        {menu[_selected].end || <FaAngleDown style={{fontSize: "20px"}}/>}
      </Button3E>
      <div className={"relative " + (isDrop ? "block" : "hidden")}>
        <div className="absolute w-full">
          <div>
            <ListColumn className={menuClass}>
              {_.map(menu, (item, index) => {
                return (
                  <Item key={randomString(8)}>
                    <Button3E onClick={(event) => itemOnClick(index, event)} to={item.to} className={itemClass}>
                      {item.start}
                      {item.mid}
                      {item.end || <></>}
                    </Button3E>
                  </Item>
                )
              })}
            </ListColumn>
          </div>
        </div>
      </div>
    </div>
  );
}