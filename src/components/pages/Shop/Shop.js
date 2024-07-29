import React from 'react';
import ShopItem from './ShopItem';
import { shopItemList } from '../../../utils/constants';


const Shop = () => {
  return (
    <div className="p-3 md:px-8 lg:px-12 bg-gradient-to-br from-[#F9F5F3] to-[#F9F5F3] min-h-screen">
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-12">
        {shopItemList.map((item, index) => (
          <ShopItem key={index} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
