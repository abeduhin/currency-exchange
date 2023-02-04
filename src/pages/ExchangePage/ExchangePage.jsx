import { useDispatch, useSelector } from "react-redux";

import ExchangeForm from "components/ExchangeForm/ExchangeForm";
import SwapForm from "components/SwapForm/SwapForm";

import css from "./ExchangePage.module.css";

import { getChange } from "redux/currencies/currencies.thunk";
import { fetchData } from "redux/currencies/currencies.selector";

const ExchangePage = () => {

  const results = useSelector(fetchData);
  const dispatch = useDispatch();
  const isCalculation = ({ amount, from, to }) => {
    dispatch(getChange({
      amount,
      from,
      to
    }))
  }
    return (
        <div className={css.main_box}>
            <ExchangeForm isCalculation={isCalculation}/>
            {results && <SwapForm data={results} />}
      </div> 
    )
};

export default ExchangePage;