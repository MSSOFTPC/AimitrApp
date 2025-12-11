import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TopBar from '../../../../components/TopBar/TopBar'
import { FormikInput } from '../../../../components/Form/FormikInput'
import Button from '../../../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/Store'
import { IUser } from '../../../../api/Users/Auth/AuthType'
import { AuthPasswordUpdateAction, AuthUpdateAction } from '../../../../api/Users/Auth/Auth'
import { toast } from '@backpackapp-io/react-native-toast'
import { login, logout } from '../../../../Redux/Slices/AuthSlice'

// ✅ Validation Schemas
const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Invalid phone number (10 digits)')
    .required('Phone is required'),
  state: Yup.string().required('State is required'),
  district: Yup.string().required('District is required'),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Enter valid 6-digit pincode')
    .required('Pincode is required'),
  postaladdress: Yup.string().required('Postal address is required'),
})

const PasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Minimum 6 characters required')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match')
    .required('Confirm password is required'),
})

const Profile = () => {
  const [tab, setTab] = useState<'profile' | 'password'>('profile')
  const [image, setImage] = useState<string | null>(null)

  const { user } = useSelector((i: RootState) => i.AuthSlice) as {
    user: IUser | null
  }
  const dispatch = useDispatch()
  const { account } = user?.accountDetails || {}
  const { state, district, pincode, postaladdress } = user?.address || {}
  const { phone, fullName } = user || {}

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    })

    if (!result.canceled && result.assets?.length > 0) {
      setImage(result.assets[0].uri)
    }
  }

  const handleProfileSubmit = (v: any) => {
    const toastId = toast.loading('Saving...')
    AuthUpdateAction({
      fullName: v.fullName,
      phone: v.phone,
      address: {
        state: v.state,
        district: v.district,
        pincode: v.pincode,
        postaladdress: v.postaladdress,
      },
      onSuccess: (saved) => {
        dispatch(login(saved))
        toast.success('Profile Updated Successfully', { id: toastId })
      },
      onFailed: () => toast.error('Something went wrong', { id: toastId }),
    })
  }

  const handlePasswordSubmit = (v: any) => {
     AuthPasswordUpdateAction({
            password: v.newPassword,
            onSuccess: (saved) => {
              dispatch(login(saved));
              toast.success('Password Changed Successfully!')
            },
            onFailed: () => {
              toast.error('Password Changed Failed!')
            },
            onFinally: () => {
            },
          });
  }


  const handleLogout = ()=>{
    toast.success("Logout Success");
    dispatch(logout())
  }


  return (
    <View style={styles.container}>
      <TopBar title="My Profile" />

      {/* ✅ Tabs Header */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'profile' && styles.activeTab]}
          onPress={() => setTab('profile')}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab === 'profile' ? '#2563EB' : '#6B7280' },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'password' && styles.activeTab]}
          onPress={() => setTab('password')}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab === 'password' ? '#2563EB' : '#6B7280' },
            ]}
          >
            Change Password
          </Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Tab Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {tab === 'profile' ? (
          <View style={styles.content}>
            {/* Profile Image */}
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Image
                  source={{
                    uri:
                      image ||
                      'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                  }}
                  style={styles.profileImage}
                />
                <View style={styles.editCircle}>
                  <Text style={styles.editText}>✎</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.profileLabel}>Change Profile Photo</Text>
              <TouchableOpacity style={{marginTop:10}} onPress={handleLogout}><Text style={{color:"red"}}>Logout</Text></TouchableOpacity>
            </View>

            {/* Profile Form */}
            <Formik
              initialValues={{
                fullName: fullName || '',
                phone: phone || '',
                state: state || '',
                district: district || '',
                pincode: pincode || '',
                postaladdress: postaladdress || '',
              }}
              validationSchema={ProfileSchema}
              onSubmit={handleProfileSubmit}
            >
              {({ handleSubmit, handleChange, values, errors, handleBlur }) => (
                <View style={styles.form}>
                  <Text style={styles.sectionTitle}>Personal Details</Text>

                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="fullName"
                    title="Full Name"
                    placeholder="Your name"
                    disabled={account}
                  />
                  {account && (
                    <Text style={{ color: '#6B7280', marginBottom: 8 }}>
                      For name change, contact Support.
                    </Text>
                  )}

                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="phone"
                    title="Phone"
                    placeholder="Your phone number"
                    keyboardType="numeric"
                  />

                  <Text style={[styles.sectionTitle, { marginTop: 15 }]}>
                    Address
                  </Text>

                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="state"
                    title="State"
                    placeholder="Enter state"
                  />
                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="district"
                    title="District"
                    placeholder="Enter district"
                  />
                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="pincode"
                    title="Pincode"
                    placeholder="Enter pincode"
                    keyboardType="numeric"
                  />
                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="postaladdress"
                    title="Postal Address"
                    placeholder="Enter full address"
                  />

                  <Button onPress={handleSubmit} style={styles.submitButton}>
                    Save
                  </Button>
                </View>
              )}
            </Formik>
          </View>
        ) : (
          <View style={styles.content}>
            {/* Change Password */}
            <Formik
              initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={PasswordSchema}
              onSubmit={handlePasswordSubmit}
            >
              {({ handleSubmit, handleChange, values, errors, handleBlur }) => (
                <View style={styles.form}>
                  <Text style={styles.sectionTitle}>Change Password</Text>

                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="newPassword"
                    title="New Password"
                    placeholder="Enter new password"
                    secureTextEntry
                  />
                  <FormikInput
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    name="confirmPassword"
                    title="Confirm Password"
                    placeholder="Confirm new password"
                    secureTextEntry
                  />

                  <Button onPress={handleSubmit} style={styles.submitButton}>
                    Update Password
                  </Button>
                </View>
              )}
            </Formik>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Profile

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#2563EB',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    padding: 15,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  editCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  profileLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  form: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 25,
  },
})
