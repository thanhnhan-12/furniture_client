import React, { useEffect } from 'react';
import CategoryImg from '../../../assets/images/category.jpg';
import './styles.scss';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { getAllCategory } from '../../../redux/category/categoryAction';
import Loader from '../../../utils/loader';

const Category = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <LayoutContainer>
      <div className="category">
        <div className="categoryHeading">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="categoryItems">
          {categories && categories.length > 0 ? (
            categories.map((category, index) => (
              <div className="categoryList" key={index}>
                <img src={category.categoryImg} alt="" />
                <p>{category.categoryName}</p>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Category;
