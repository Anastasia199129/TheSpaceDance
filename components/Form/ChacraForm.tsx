'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import { sendContactForm } from '@/lib/api'
import MyContainer from '../Container/Container'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { checkEmail } from '@/helpers/checkEmail'

import s from './Form.module.sass'
import { handleCreateUser } from '@/helpers/createUser'

const initValues = {
  name: '',
  surname: '',
  email: '',
  number: '',
  coment: '',
}

const initialState = { values: initValues, isLoading: false }

export default function ChacraForm() {
  const [state, setState] = useState(initialState)
  const [touched, setTouched] = useState({
    name: false,
    surname: false,
    email: false,
  })
  const [isValidValues, setIsValidValues] = useState({
    name: true,
    surname: true,
    email: true,
  })
  const { theme } = useTheme()

  const { values, isLoading } = state

  const t = useTranslations('form')

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

    ////check is Email valid
    if (!checkEmail(values.email) && values.email.length > 3) {
      setIsValidValues((prev) => ({
        ...prev,
        email: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        email: true,
      }))
    }

    ////check is Name valid
    if (!values.name) {
      setIsValidValues((prev) => ({
        ...prev,
        name: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        name: true,
      }))
    }

    ////check is surname valid
    if (!values.surname) {
      setIsValidValues((prev) => ({
        ...prev,
        surname: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        surname: true,
      }))
    }
  }

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))
    try {
      if (
        values.name &&
        values.email &&
        values.surname &&
        checkEmail(values.email)
      ) {
        const result = await sendContactForm(values)
        const createdUser = await handleCreateUser(values)

        if(!createdUser?.ok){
          throw new Error('Error, user not created!!!')
        }
        if(!result.data){
          throw new Error('Error, mail not sended!!!')
        }
        toast.success('Success! Message sent. We will contact you soon.')
        setState(initialState)
        setTouched({
          name: false,
          surname: false,
          email: false,
        })
        setIsValidValues((prev) => ({
          ...prev,
          email: true,
          name: true,
          surname: true,
        }))
        setState(initialState)
      } else {
        toast.error('Error! Internal Server Error. Please try again later.')

        ///invalid email
        if (!checkEmail(values.email)) {
          setIsValidValues((prev) => ({
            ...prev,
            email: false,
          }))
        }

        ///invalid name
        if (!values.name) {
          setIsValidValues((prev) => ({
            ...prev,
            name: false,
          }))
        }

        ///invalid surname
        if (!values.surname) {
          setIsValidValues((prev) => ({
            ...prev,
            surname: false,
          }))
        }
      }
    } catch (error) {
      console.log(error)
    }
    setState((prev) => ({
      ...prev,
      isLoading: false,
    }))
  }

  return (
    <div className={s.section}>
      <MyContainer>
        <h4>{t('title')}</h4>
        <form
          className={`${s.formContainer} ${
            theme === 'light' ? s.lightLabel : s.darkLabel
          }`}
        >
          <Container className={s.form} maxW='100%'>
            <FormControl
              isRequired
              isInvalid={(!values.name && touched.name) || !isValidValues.name}
              mb={5}
            >
              <FormLabel>{t('name')}</FormLabel>
              <Input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage className={s.red}>
                {t('require')}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={
                (!values.surname && touched.surname) || !isValidValues.surname
              }
              mb={5}
            >
              <FormLabel>{t('surname')}</FormLabel>
              <Input
                type='text'
                name='surname'
                value={values.surname}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage className={s.red}>
                {t('require')}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={
                (!values.email && touched.email) || !isValidValues.email
              }
              mb={5}
            >
              <FormLabel>{t('mail')}</FormLabel>
              <Input
                style={{ borderColor: `${isValidValues.email ? '' : 'red'}` }}
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {!isValidValues.email && (
                <FormErrorMessage className={s.red}>
                  {t('emailError')}
                </FormErrorMessage>
              )}
              {!values.email && touched.email && (
                <FormErrorMessage className={s.red}>
                  {t('require')}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl mb={5}>
              <FormLabel>{t('phone')}</FormLabel>
              <Input
                type='number'
                name='number'
                value={values.number}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>{t('coment')}</FormLabel>
              <Textarea
                name='coment'
                rows={4}
                value={values.coment}
                onChange={handleChangeTextarea}
              />
            </FormControl>
          </Container>
          <Button
            className={s.button}
            isLoading={isLoading}
            disabled={!values.name || !values.email || !values.surname}
            onClick={onSubmit}
          >
            {t('btn')}
          </Button>
        </form>
      </MyContainer>
    </div>
  )
}
