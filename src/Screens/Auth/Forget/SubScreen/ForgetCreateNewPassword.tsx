import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { H6 } from 'tamagui';
import { FormikInput } from '../../../../components/Form/FormikInput';
import GlobalButton from '../../../../components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PasswordUpdatebyemailAction } from '../../../../api/Chagepasswordbyemail/Auth';
import { toast } from '@backpackapp-io/react-native-toast';

const ForgetCreateNewPassword = ({ onSave, email, otp }) => {
  // Validation schema with password match check
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const onSubmit = (values) => {
    PasswordUpdatebyemailAction({
      email,
      otp,
      password: values.password,
      onSuccess: () => {
        onSave(false);
        setTimeout(() => {
          toast.success('Password Changed');
        }, 300);
      },
    });
  };

  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <H6>Create new password</H6>
      <Text>Your new password must be unique from those previously used.</Text>

      <Formik
        initialValues={{ password: '', cpassword: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <>
            <FormikInput
              handleChange={handleChange}
              values={values}
              errors={errors}
              name="password"
              placeholder="Enter Password"
              secureTextEntry
            />
            <FormikInput
              handleChange={handleChange}
              values={values}
              errors={errors}
              name="cpassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <GlobalButton onPress={handleSubmit}>Change Password</GlobalButton>
          </>
        )}
      </Formik>
    </View>
  );
};

export default memo(ForgetCreateNewPassword);
