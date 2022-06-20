import React from 'react'
import './TopCategories.css' 
import TopCategoryCarousal from './TopCategoryCarousal'
import TopCategoriesSlickSlack from './TopCategoriesSlickSlack'


const TopGategories = () => {
  return (
    <>
    
        <div className="row rowTopCategories">
            <div className="col-lg-6 col-sm-12 col-12 col-md-12 " >
                <div className='colTopCategories'>
                    <div className="innercolTopCategories">
                <div className="head1">Collection of 2022</div>
                <div className="head2">BEST QUALITY CONTAINERS</div>
                

                <TopCategoryCarousal />
                <br /> <br />

                <h4 className="head3">QR 132842</h4>
                <div className="head4">VIEW</div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12 col-md-12 colTopCategories">
              <TopCategoriesSlickSlack />
            </div>
        </div>
    
    </>
  )
}

export default TopGategories