import MakeStacks from './MakeStacks';
import React from 'react'
import RowOfButtons from './RowOfButtons';

export default function TotalGrid() {
    return <div className="container">
    <RowOfButtons />
        <MakeStacks />
    </div>;
}
