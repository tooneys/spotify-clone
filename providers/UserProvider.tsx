'use client';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default UserProvider;
