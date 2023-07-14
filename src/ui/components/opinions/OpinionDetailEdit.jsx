import OpinionDetail from './OpinionDetail/OpinionDetail';
import OpinionEdit from './OpinionEdit/OpinionEdit';
import { useState } from 'react';
import useStyles from './OpinionDetailEdit.styles';
import product from '../../../mockedData/mock-filter-opinion.json';
const OpinionDetailEdit = () => {
    const classes = useStyles();
    const [rating, setRating] = useState(product.score);
    const handlechangeRating = (newRating) => {
        setRating(newRating);
    }

    return (
        <div className={classes.wrapper}>
            <OpinionDetail rating={rating} />
            <OpinionEdit
                rating={rating}
                onChangeRating={handlechangeRating} />
        </div>
    );
};

export default OpinionDetailEdit;