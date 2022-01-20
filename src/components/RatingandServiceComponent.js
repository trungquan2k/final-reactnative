import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import NQSRatingComponent from './NQSRatingComponent';
import RatingComponent from './RatingComponent';
import ReviewUserComponent from './ReviewUserComponent';



const RatingAndServiceComponent = () => {
    return (
        <>
            <RatingComponent title="KindiCare Rating" subtitle="Very Good" />
            <ReviewUserComponent title="User Review" subtitle="Very Good"/>
            <NQSRatingComponent title="NQS Rating" subtitle="Last reviewed 21 September 2017" />
        </>
    );
}
export default RatingAndServiceComponent;