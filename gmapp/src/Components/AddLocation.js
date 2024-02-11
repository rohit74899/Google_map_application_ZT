import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CustomIndex = ({ onTagsChange }) => {
  const [tags, setTags] = useState(["Manpa", "Swargate", "Balajinagar", "Bharati vidyapeeth", "Katraj"]);

  return (
    <Autocomplete
      multiple
      limitTags={5}
      id="multiple-limit-tags"
      options={tags}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label="limitTags" placeholder="Favorites" />
      )}
      onChange={(_, newValue) => onTagsChange(newValue)}
      sx={{ width: '300px' }}
    />
  );
};

export default CustomIndex;
