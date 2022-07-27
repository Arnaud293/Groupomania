import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { UidContext } from '../components/AppContext'
import LeftNav from '../components/LeftNav';
import Navbar from '../components/Navbar';
import Card from '../components/Post/Card';
import { isEmpty } from '../components/Utils';

const Trending = () => {

  const uid = useContext(UidContext);
  const hotList = useSelector((state) => state.hotReducer);

  return (
    <div>
      <Navbar/> 
      <LeftNav />
      <div className='main'>
        {!isEmpty(hotList[0]) && hotList.map((post) => <Card post={post} key={post._id}/> )}
      </div>
    </div>
  )
}

export default Trending