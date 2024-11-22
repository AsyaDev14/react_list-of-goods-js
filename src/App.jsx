import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [sort, setSort] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const getList = () => {
    let sortedGoods = [...goodsFromServer];

    switch (sort) {
      case 'Alph':
        sortedGoods.sort();
        break;
      case 'Length':
        sortedGoods.sort((a, b) => a.length - b.length);
        break;
      default:
        sortedGoods = [...goodsFromServer];
    }

    return isReversed ? sortedGoods.reverse() : sortedGoods;
  };

  const toggleReverse = () => {
    setIsReversed(prev => !prev);
  };

  const isOriginalOrder = sort === '' && !isReversed;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sort === 'Alph' ? '' : 'is-light'}`}
          onClick={() => setSort('Alph')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sort === 'Length' ? '' : 'is-light'}`}
          onClick={() => setSort('Length')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={toggleReverse}
        >
          Reverse
        </button>

        {!isOriginalOrder && (
          <button
            type="button"
            className="button is-danger"
            onClick={() => {
              setSort('');
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {getList().map(good => (
          <li key={good} data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
