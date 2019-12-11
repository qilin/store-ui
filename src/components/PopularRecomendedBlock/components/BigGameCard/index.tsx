import React from 'react';
import { Typography } from '@material-ui/core';
import { Rating, GameCard } from 'components';
import { CordGame } from 'types';

import useStyles from './useStyles';

interface Props {
  game: CordGame;
  openGame: (id: string) => void;
}

const BigGameCard = (props: Props) => {
  const { title, rating, media } = props.game;
  const imageSrc = media.screenshots[0];
  const classes = useStyles();

  const cardContent = (
    <>
      <div className={classes.rating}>
        <Rating rating={rating} />
      </div>
      <div className={classes.imageWrapper}>
        <img className={classes.image} alt={title} title={title} src={imageSrc} />
      </div>
    </>
  );
  const footerContent = <Typography variant="h6">{title}</Typography>;

  return (
    <GameCard
      footerContent={footerContent}
      cardContent={cardContent}
      {...props}
    />
  );
};

export default BigGameCard;
