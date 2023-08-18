import React from 'react';
import CategoryImg from '../../../assets/images/category.jpg';
import './styles.scss';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';

const Category = () => {
  return (
    <LayoutContainer>
      <div className="category">
        <div className="categoryHeading">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="categoryItems">
          <div className="categoryList">
            <img src={CategoryImg} alt="" />
            <p>Dining</p>
          </div>

          <div className="categoryList">
            <img src={CategoryImg} alt="" />
            <p>Living</p>
          </div>

          <div className="categoryList">
            <img src={CategoryImg} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Category;
