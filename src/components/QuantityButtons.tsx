import React, { MouseEventHandler, useState } from "react";

interface QuantityButtonsProps {
  quantity: number;
  onDecrement: MouseEventHandler<Element>;
  onIncrement: MouseEventHandler<Element>;
}

const QuantityButtons = ({
  quantity,
  onDecrement,
  onIncrement,
}: QuantityButtonsProps): JSX.Element => {
  return (
    <div className="border border-gray-400">
      <button className="px-4 py-2" onClick={onDecrement}>
        -
      </button>
      <span className="px-4 py-2 border-x border-gray-400">{quantity}</span>
      <button className="px-4 py-2" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
