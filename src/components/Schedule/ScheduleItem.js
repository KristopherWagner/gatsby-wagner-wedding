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

const Heading = styled.h5`
  font-family: "Montserrat", serif;
  text-decoration: underline;
`;

// eslint-disable-next-line react/prop-types
function Body({ className, children }) {
  return <p className={`body1 ${className}`}>{children}</p>;
}

const LeftGridItem = styled(Body)`
  justify-self: end;
  text-decoration: underline;

  @media (min-width: 1080px) {
    margin: 8px 16px 8px 0px;
  }
`;

const RightGridItem = styled(Body)`
  @media (min-width: 1080px) {
    justify-self: start;
    margin: 8px 0px;
  }
`;

export default function ScheduleItem(props) {
  const {
    dress, name, when, where, who,
  } = props;
  return (
    <div>
      <Heading>{name}</Heading>
      <Grid>
        {who && (
          <>
            <LeftGridItem>Who:</LeftGridItem>
            <RightGridItem>{who}</RightGridItem>
          </>
        )}
        {when && (
          <>
            <LeftGridItem>When:</LeftGridItem>
            <RightGridItem>{when}</RightGridItem>
          </>
        )}
        {where && (
          <>
            <LeftGridItem>Where:</LeftGridItem>
            <RightGridItem>{where}</RightGridItem>
          </>
        )}
        {dress && (
          <>
            <LeftGridItem>Dress code:</LeftGridItem>
            <RightGridItem>{dress}</RightGridItem>
          </>
        )}
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
  dress: undefined,
  when: undefined,
  where: undefined,
  who: undefined,
};
