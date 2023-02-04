import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";
import { isLoading } from "redux/currencies/currencies.selector";
import { Loader } from "components/Loader/Loader";


const SwapForm = ({data}) => {
    const loading = useSelector(isLoading);

    const { result, query } = data;
    return (
        <>
        {loading && <Loader />}
            {result > 0 && 
            <Typography 
            sx={{
                fontSize: 20,
                marginTop: 3
            }}
            variant="h3"
            gutterBottom
            component="p"
        >
           The total amount will be:  {result.toFixed(1)} {query.to}
        </Typography>} 
        </>
        
    )
};

export default SwapForm;

SwapForm.propTypes = {
    data: PropTypes.shape({
        info: PropTypes.shape({
            timestamp: PropTypes.number.isRequired,
            quote: PropTypes.number.isRequired
        }),
        query: PropTypes.shape({
            from: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired
        }),
        success: PropTypes.bool,
        result: PropTypes.number
    })
};