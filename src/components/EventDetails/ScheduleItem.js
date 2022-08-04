import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftGridItem = styled.p`
  justify-self: end;
  margin-right: 16px;
  text-decoration: underline;
`;

const RightGridItem = styled.p`
  justify-self: start;
`;

export default function ScheduleItem(props) {
  const {
    dress, name, when, where, who,
  } = props;
  return (
    <div>
      <h2>{name}</h2>
      <Grid>
        <LeftGridItem>Who:</LeftGridItem>
        <RightGridItem>{who}</RightGridItem>
        <LeftGridItem>When:</LeftGridItem>
        <RightGridItem>{when}</RightGridItem>
        <LeftGridItem>Where:</LeftGridItem>
        <RightGridItem>{where}</RightGridItem>
        <LeftGridItem>Dress code:</LeftGridItem>
        <RightGridItem>{dress}</RightGridItem>
      </Grid>
    </div>
  );
}

ScheduleItem.propTypes = {
  dress: PropTypes.string,
  name: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  who: PropTypes.string.isRequired,
};

ScheduleItem.defaultProps = {
  dress: 'Casual',
};
