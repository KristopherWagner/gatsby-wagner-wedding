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

// eslint-disable-next-line react/prop-types
function Body({ className, children }) {
  return <p className={`body1 ${className}`}>{children}</p>;
}

const LeftGridItem = styled(Body)`
  justify-self: end;
  text-decoration: underline;

  @media (min-width: 1080px) {
    margin-right: 16px;
  }
`;

const RightGridItem = styled(Body)`
  @media (min-width: 1080px) {
    justify-self: start;
  }
`;

export default function ScheduleItem(props) {
  const {
    dress, name, when, where, who,
  } = props;
  return (
    <div>
      <h5>{name}</h5>
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
  when: PropTypes.string,
  where: PropTypes.string,
  who: PropTypes.string,
};

ScheduleItem.defaultProps = {
  dress: 'Casual',
  when: 'TBD',
  where: 'TBD',
  who: 'All guests',
};
