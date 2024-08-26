import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../services/categories/categorySlice';


const Categories = () => {
    const dispatch = useDispatch();
    const  {data, loading} = useSelector(state => state.category)

    
  
    const handleGetData = () => {
        dispatch(getCategoryRequest())
    }
    useEffect(() => {
        dispatch(getCategoryRequest())
    }, [dispatch])
    return (
        <div>
            <h1 className='text-white text-3xl bg-blue-500 inline-block ' >Category</h1>
            {loading && <span>Loading...</span>}
            {!loading && data && data.map(cate => (<p key={cate.blogCateId}>{cate.blogCateName}</p>))}
            <div> <button onClick={handleGetData}>GetData</button></div>

        </div>
    );
};

export default Categories;