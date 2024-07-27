"use client"
import React, { useCallback, useState } from 'react';
import AddButton from './common/AddButton';
import TableCell from './common/TableCell';
import update from 'immutability-helper';
import Image from 'next/image';
import TableRow from './TableRow';
import toast, { Toaster } from 'react-hot-toast';

const Table = () => {
  // For managing the row state
  const [states, setStates] = useState([{ id: 1, name: '1' }]);
  // For managing the column state
  const [variants, setVariants] = useState([{ id: 1, name: 'Primary Variant' }]);

  // For adding a new row
  const addState = () => {
    const newState = { id: states.length + 1, name: `${states.length + 1}` };
    setStates([...states, newState]);
    toast.success('Row added');
  };

  // For removing a row
  const removeState = (id) => {
    setStates(states.filter(state => state.id !== id));
    toast.error('Row removed');
  };

  // For adding a new column
  const addVariant = () => {
    const newVariant = { id: variants.length + 1, name: `Variant ${variants.length + 1}` };
    setVariants([...variants, newVariant]);
    toast.success('Column added');
  };

  // For removing a column
  const removeVariant = (id) => {
    setVariants(variants.filter(variant => variant.id !== id));
    toast.error('Column removed');
  };

  // moveRow for drag and drop
  const moveRow = useCallback((dragIndex, hoverIndex) => {
    setStates((prevStates) =>
      update(prevStates, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevStates[dragIndex]],
        ],
      }),
    )
  }, []);

  return (
    <div className="container mx-auto my-4 bg-[#F9FBFC] p-4 border border-TextGreyLight">
      <div className="overflow-x-auto">
        <table className="max-w-full">
          {/* table header */}
          <thead>
            <tr>
              <TableCell className="sticky-header left-0 border-none w-[80px]">{" "}</TableCell>
              <TableCell className="text-TextGrey w-[300px] sticky-header left-[75px]">Product Filter</TableCell>
              <TableCell className="max-w-[600px]">
                <div className='flex items-center justify-between gap-3'>
                  <div className="flex space-x-4 overflow-x-auto hidden-scrollbar">
                    {variants.map((variant) => (
                      <div key={variant.id} className="min-w-[200px] flex items-center justify-between gap-3 border-r">
                        <p className="text-TextGrey">{variant.name}</p>
                        <button onClick={() => removeVariant(variant.id)} className="cursor-pointer">
                          <Image src="/ColDelete.svg" alt="Remove" width={20} height={20} className='w-[20px] h-[20px]' />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </TableCell>
            </tr>
          </thead>
          {/* body of table */}
          <tbody>
            {states.map((state, index) => (
              <TableRow
                key={state.id}              
                index={index}
                id={state.id}
                state={state}
                variants={variants}
                removeState={removeState}
                addVariant={addVariant}
                moveRow={moveRow}
              />
            ))}
          </tbody>
          {/* footer of table */}
          <tfoot>
            <tr>
              <TableCell className="sticky-header left-0">
                <AddButton onClick={addState} />
              </TableCell>
            </tr>
          </tfoot>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default Table;
