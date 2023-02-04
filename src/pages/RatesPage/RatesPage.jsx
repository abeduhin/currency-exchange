import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRates } from "redux/currencies/currencies.selector";

import RatesForm from "components/RatesForm/RatesForm";
import RatesSelector from "components/RatesSelector/RatesSelector";
import { Loader } from "components/Loader/Loader";

import { getCurrentRates } from "redux/currencies/currencies.thunk";

import css from "./RatesPage.module.css";

const RatesPage = () => {
    
    const data = useSelector(fetchRates);
    const dispatch = useDispatch();

    useEffect(() => {
        const source = 'UAH';
        dispatch(getCurrentRates(source))
    // eslint-disable-next-line
    },[])

    const selectedBase = source => {
        dispatch(getCurrentRates(source))
    }

    return (
        <div className={css.main_box}>
            {data.success ? <>
                <RatesSelector onChange={selectedBase}/>
                <RatesForm data={data}/>
            </> : <Loader />}
        </div>
    )
};

export default RatesPage;