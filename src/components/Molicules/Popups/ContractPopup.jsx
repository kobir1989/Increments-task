import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';
import styled from '@emotion/styled';
import Button from '../../Atoms/Button/Button';
import SelectOptions from '../../Atoms/SelectOptions/SelectOptions';
import { contractFromOptions } from '../../../staticData/options';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const StyleRadioButton = styled('input')({
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  padding: '0.3rem',
  width: '1.5rem',
  height: '1.5rem',
  marginTop: '1rem',
  border: '2px solid #DC1F27',
  outline: 'none',
  transition: 'border-color 0.2s ease-in-out',
  borderRadius: '50%',
  '&:checked': {
    background: '#DC1F27',
  },
});

const StyledInput = styled('input')({
  width: '100%',
  padding: '0.68rem 1.25rem',
  borderRadius: '4px',
  border: '1px solid #D1D1D1',
  fontSize: '1rem',
});

const StyledTextArea = styled('textarea')({
  padding: '0.68rem 1.25rem',
  border: '1px solid #D1D1D1',
  borderRadius: '4px',
  fontFamily: 'Poppins',
  fontSize: '1rem',
});

const initialValue = {
  name: '',
  email: '',
  subject: '',
  male: false,
  female: false,
  interast: '',
  message: '',
};

const ContractPopup = ({ toggleDrawer, isOpen, handleClose }) => {
  const [contractValue, setContractValue] = useState(initialValue);
  const { name, email, subject, male, female, interast, message } =
    contractValue;

  //onChange handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContractValue({ ...contractValue, [name]: value });
  };

  //Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contractValue);
  };
  return (
    <Drawer onOpen={toggleDrawer} isOpen={isOpen} onClose={handleClose}>
      <Box
        width={'100%'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
        }}
      >
        <Stack direction='row' gap={1}>
          <span>
            <Icon name='callIconTwo' color='#DC1F27' />
          </span>
          <Typography variant='body1' color='#DC1F27'>
            Contract Us
          </Typography>
        </Stack>
        <IconButton disableRipple sx={{ p: 0 }} onClick={handleClose}>
          <Icon name='closeIcon' />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          p: '0 1.5rem',
          overflow: 'hidden',
        }}
      >
        <Typography variant='h3' mb={2}>
          Get in touch with us
        </Typography>
        <StyledForm onSubmit={submitHandler}>
          {/* Input */}
          <StyledInput
            required
            placeholder='Name'
            type='text'
            name='name'
            value={name}
            onChange={onChangeHandler}
          />
          <StyledInput
            required
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={onChangeHandler}
          />
          <StyledInput
            required
            placeholder='Subject'
            type='text'
            name='subject'
            value={subject}
            onChange={onChangeHandler}
          />

          {/* radio buttons  start*/}
          <Box
            sx={{ background: '#F6F6F6', p: '1.25rem', borderRadius: '4px' }}
          >
            <Typography variant='body'>Gender</Typography>
            <Stack
              gap={2}
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Stack direction='row' gap={2} mt={3} alignItems='center'>
                <Icon name='male' />
                <Typography variant='body' fontWeight='400'>
                  Male
                </Typography>
              </Stack>
              <StyleRadioButton
                type='radio'
                required
                checked={male}
                name='male'
                onChange={onChangeHandler}
              />
            </Stack>
            <Stack
              gap={2}
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Stack direction='row' gap={2} mt={3} alignItems='center'>
                <Icon name='female' />
                <Typography variant='body' fontWeight='400'>
                  Female
                </Typography>
              </Stack>
              <StyleRadioButton
                type='radio'
                name='female'
                required
                checked={female}
                onChange={onChangeHandler}
              />
            </Stack>
          </Box>
          {/* radio buttons  ends*/}

          {/* select options */}
          <SelectOptions
            optionArray={contractFromOptions}
            value={interast}
            onChangeHandler={onChangeHandler}
          />
          {/* TextArea */}
          <StyledTextArea
            placeholder='Message'
            name='message'
            rows={4}
            value={message}
            onChange={onChangeHandler}
          />
          <Stack alignItems='center' mt={2}>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Stack>
        </StyledForm>
      </Box>
    </Drawer>
  );
};

export default ContractPopup;
