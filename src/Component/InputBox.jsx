function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency,
  amountDisable = false,
}) {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between">
      <div className="w-1/2">
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          type="number"
          className="w-full border p-1 rounded"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2">
        <label className="text-gray-700 font-medium">Currency</label>
        <select
          className="w-full border p-1 rounded"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
