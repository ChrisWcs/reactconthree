import React from 'react';

import Column from './styledcomps/Column';
import Row from './styledcomps/Row';
import colorPicker from './colorPicker';

const Board = ({board}) => (
    <Column>
        { board.map( (row, index) => <Row key={index}>{row.map( (x, i) => colorPicker( x, i ))}</Row> )}
    </Column>
);

export default Board;