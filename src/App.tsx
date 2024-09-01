import { useAppDispatch } from './app/hooks/useAppDispatch';
import React, { useEffect } from 'react';
import { fetchUsersData, setFilter } from './features/users/usersSlice';
import { useAppSelector } from './app/hooks/useAppSelector';
import { Title, Input, Grid, Span, Layout, Box } from './App.styled';
import User from './interfaces/user';

function App() {
  const {
    data: users,
    loading,
    error,
    filters,
  } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  // Filter users based on the filters state
  const filteredUsers = users.filter(
    (user: User) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  // Handle input change for filters
  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Layout>
      {users.length > 0 ? (
        <Box>
          <Title>User Management Table</Title>
          <Grid>
            <Span>
              Name
              <Input
                type="text"
                placeholder="Search Name"
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
              />
            </Span>
            <Span>
              Username
              <Input
                type="text"
                placeholder="Search Username"
                value={filters.username}
                onChange={(e) => handleFilterChange('username', e.target.value)}
              />
            </Span>
            <Span>
              Email
              <Input
                type="text"
                placeholder="Search Email"
                value={filters.email}
                onChange={(e) => handleFilterChange('email', e.target.value)}
              />
            </Span>
            <Span>
              Phone
              <Input
                type="text"
                placeholder="Search Phone"
                value={filters.phone}
                onChange={(e) => handleFilterChange('phone', e.target.value)}
              />
            </Span>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <React.Fragment key={user.id}>
                  <Span>{user.name}</Span>
                  <Span>{user.username}</Span>
                  <Span>{user.email}</Span>
                  <Span>{user.phone}</Span>
                </React.Fragment>
              ))
            ) : (
              <Box>No user data found.</Box>
            )}
          </Grid>
        </Box>
      ) : (
        <Box>No user data found.</Box>
      )}
    </Layout>
  );
}

export default App;
