import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import React from 'react'

const NavBar = () => {
  const icons = [
    <ModeEditOutlineTwoToneIcon key={"icon1"} sx={{ fontSize: 20 }} />,
    <VpnKeyTwoToneIcon key={"icon2"} sx={{ fontSize: 20 }} />,
  ];

  return (
    <div className='w-full flex justify-center py-3'>
      <div className='flex  justify-between w-8/12'>
        <div>Logo</div>
        <div className='flex gap-4 text-xs'>
          {["my pens", "key chains"].map((val, i) => (
            <div key={i} className='flex gap-1 font-semibold text-dark-gray cursor-pointer hover:text-blue-700'>
              {icons[i % icons.length]}
              {val}
            </div>
          ))}
        </div>
        <div className='flex gap-4'>
          <SearchOutlinedIcon className='hover:text-black text-dark-gray cursor-pointer' />
          <FavoriteBorderOutlinedIcon className='hover:text-black text-dark-gray cursor-pointer' />
          <ShoppingCartOutlinedIcon className='hover:text-black text-dark-gray cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default NavBar