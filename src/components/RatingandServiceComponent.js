import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import NQSRatingComponent from './NQSRatingComponent';
import RatingComponent from './RatingComponent';
import ReviewUserComponent from './ReviewUserComponent';

import { getDetail } from '../../services';
import CenterContext from '../context/CenterContext';

const RatingAndServiceComponent = ({centerId}) => {
    const [reviews,setReviews] =useState({})
    const centers = useContext(CenterContext);
    useEffect(async ()=>{
        setReviews(getDetail(centers,centerId,"reviews")); 
    },[]);

    return (
        <>
            <RatingComponent title="KindiCare Rating" subtitle="Very Good" description={reviews?.description}  rate={reviews?.rate} average_rate={reviews?.average_rate}/>
            <ReviewUserComponent title="User Review" subtitle="Very Good" reviews={reviews?.user_reviews}/>
            <NQSRatingComponent title="NQS Rating" subtitle="Last reviewed 21 September 2017" nqs_rating={reviews?.nqs_rating} />
        </>
    );
}
export default RatingAndServiceComponent;
