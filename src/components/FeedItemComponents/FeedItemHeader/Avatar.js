import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function UserAvatar({
    avatarUrl,
    userName
}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={userName} src={avatarUrl} />
    </Stack>
  );
}
