import { Header } from "../header/Header";

export const MarketplaceLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
};