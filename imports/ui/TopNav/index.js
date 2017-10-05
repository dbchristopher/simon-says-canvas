import styled from 'styled-components';
import React from 'react';
import Link from './Link';

const NavBar = styled.div`
  border-bottom: 1px solid #dddddd;
`;

export default function TopNav() {
  return (
    <NavBar>
      <Link href="/">Play</Link>
      <Link href="/leaderboard">Top Scores</Link>
    </NavBar>
  );
}