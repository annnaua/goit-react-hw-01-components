import user from '../data/user';
import data from '../data/data';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};
